import { useMutation } from "@tanstack/react-query";

import Toast from "react-native-toast-message";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCompleteProfile } from "../schema/schemaCompleteProfile";
import { ICompleteProfile } from "../types/completeProfile";
import {
  ICompleteProfileServiceProps,
  completeProfileService,
} from "../services/completeProfie.service";
import { useAuth } from "@global/context/useAuth";
import { useGetUserDetails } from "@features/profile/hooks/useGetUserDetails";

export function useCompleteProfile() {
  const user = useAuth((state) => state.user);

  const { data, isRefetching, refetch } = useGetUserDetails({
    userId: user?.uid,
    isEnabled: false,
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<ICompleteProfile>({
    resolver: yupResolver(schemaCompleteProfile),
  });

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (data: ICompleteProfileServiceProps) => {
      return completeProfileService(data);
    },
    onSuccess: (data) => {
      refetch();
      Toast.show({
        text1: "Perfil completado com sucesso!",
      });
    },
    onError: (e, variables, context) => {
      const { message, name, cause, stack } = e;
      console.log({ message, name, cause, stack });

      Toast.show({
        text1: "Erro ao completar dados",
        type: "error",
      });
    },
  });

  return {
    mutate,
    isPending: isPending || isRefetching,
    errors,
    control,
    handleSubmit,
    setError,
    setValue,
    isSuccess,
  };
}
