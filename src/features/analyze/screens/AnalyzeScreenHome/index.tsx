import * as S from "./styles";
import { Dimensions, StatusBar, ScrollView, View } from "react-native";
import { BackGroundAddConsumptionHomeSvg } from "@assets/vector";
import { scale } from "react-native-size-matters";
import { Spacer } from "@global/components/Spacer";
import Text from "@global/components/Text";
import { HeaderHomeScreen } from "@features/home/components/HeaderHomeScreen";
import { Grafico } from "@assets/icons";
import { useAuth } from "@global/context/useAuth";
import { useGetUserDetails } from "@features/profile/hooks/useGetUserDetails";

const { width } = Dimensions.get("window");

export function AnalyzeHomeScreen() {
   const user = useAuth((state) => state.user);

  const { data, isLoading, refetch } = useGetUserDetails({
    userId: user?.uid,
  });

  console.log(data?.timeToSleep.toDateString());

   return (


    <S.Container>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#f4f8fb"} />

      <Text
        variant="Inter_700Bold"
        fontSize={20}
        color="grayText"
        left={20}
        style={{}}
      >
        Para hoje
      </Text>

      <S.ContainerTitle>
        {/* Consumo de Agua */}
        <S.ViewConsumption>
          <BackGroundAddConsumptionHomeSvg
            width={width - 100}
            height={scale(300)}
          />

          {/* Visualizar Consumo de Agua */}
          <S.ViewConsumptionWater>
            <S.ContainerConsumptionText>
              <Text
                variant="Poppins_600SemiBold"
                fontSize={18}
                color="grayText"
              >
                Água
              </Text>

              <Grafico />

              <Text variant="Poppins_500Medium" fontSize={18} color="white">
                2.1 litros
              </Text>
            </S.ContainerConsumptionText>
          </S.ViewConsumptionWater>
        </S.ViewConsumption>

        {/* Dormir */}
        <S.ViewConsumption>
          <S.ViewConsumptionWater>
            <S.ContainerConsumptionText>
              <Text
                variant="Poppins_600SemiBold"
                fontSize={18}
                color="grayText"
              >
                Dormir
              </Text>
              <View>
                <Text
                  variant="Poppins_600SemiBold"
                  fontSize={25}
                  color="grayText"
                >
                  08:00
               </Text>

                <Text
                  variant="Poppins_500Medium"
                  fontSize={14}
                  color="grayText"
                >
                  horas
                </Text>
              </View>
            </S.ContainerConsumptionText>
          </S.ViewConsumptionWater>
        </S.ViewConsumption>
      </S.ContainerTitle>
    </S.Container>
  );
}
