import { useMutation } from "@tanstack/react-query";

import Toast from "react-native-toast-message";

import {
  IAddingWaterConsumptionServiceServiceProps,
  addingWaterConsumptionService,
} from "../services/addingWaterConsumption.service";
import { queryClient } from "@global/config/react-query";
import { useAuth } from "@global/context/useAuth";
import { useNavigation } from "@react-navigation/native";
import { AppScreenNavigationProp } from "routes/app.routes";

export function useAddingWaterConsumption() {
  const navigation = useNavigation<AppScreenNavigationProp>();
  const user = useAuth((state) => state.user);

  const userId = user?.uid;

  const date = new Date().toISOString().split("T")[0];

  return useMutation({
    mutationFn: (data: IAddingWaterConsumptionServiceServiceProps) => {
      return addingWaterConsumptionService(data);
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["keyGetUserDetailsWaterByDate", userId, date],
      });

      if (
        variables?.dailyAmountOfWater &&
        variables.data.amountOfWaterConsumed >= variables?.dailyAmountOfWater
      ) {
        navigation.navigate("WaterIntakeStatus");
      } else {
        Toast.show({
          text1: "Consumo salvo",
        });
      }
    },
    onError: (e, variables, context) => {
      const { message, name, cause, stack } = e;
      console.log({ message, name, cause, stack });

      Toast.show({
        text1: "Erro adicionar consumo",
        type: "error",
      });
    },
  });
}
