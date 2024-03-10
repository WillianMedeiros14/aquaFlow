import * as S from "./styles";
import { HeaderHomeScreen } from "@features/home/components/HeaderHomeScreen";
import { Dimensions, StatusBar } from "react-native";
import theme from "@theme/theme/theme";
import { BackGroundAddConsumptionHomeSvg } from "@assets/vector";
import { scale } from "react-native-size-matters";
import { Spacer } from "@global/components/Spacer";
import Text from "@global/components/Text";
import AnimatedSVG from "@features/home/components/AnimatedSVG";
import { Button } from "@global/components/Button";
import { useGetUserDetails } from "@features/profile/hooks/useGetUserDetails";
import { useAuth } from "@global/context/useAuth";

const { width } = Dimensions.get("window");

export function HomeScreen() {
  return (
    <S.Container>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#f4f8fb"} />
      <S.ContainerHeader>
        <HeaderHomeScreen />
      </S.ContainerHeader>

      <S.ScrollView>
        <Spacer height={60} />
        <S.ContainerAddConsumption>
          <BackGroundAddConsumptionHomeSvg
            width={width - 32}
            height={scale(160)}
          />

          <S.ContentAddConsumption>
            <S.ContainerConsumptionText>
              <Text
                variant="Poppins_600SemiBold"
                fontSize={20}
                color="grayText"
              >
                11:00 AM
              </Text>

              <Text
                variant="Poppins_500Medium"
                fontSize={14}
                color="grayQuaternary"
                style={{
                  marginTop: -5,
                }}
              >
                200ml de água (2 copos)
              </Text>
            </S.ContainerConsumptionText>

            <S.ButtonAddConsumption>
              <Text variant="Poppins_500Medium" fontSize={10} color="black">
                Adicionar consumo
              </Text>
            </S.ButtonAddConsumption>
          </S.ContentAddConsumption>
        </S.ContainerAddConsumption>

        <Spacer height={54} />

        <S.ContainerDailyGoal>
          <AnimatedSVG />

          <S.DailyGoal>
            <Text
              variant="Poppins_500Medium"
              fontSize={12}
              color="grayQuaternary"
            >
              Meta diária
            </Text>
            <Spacer height={7} />
            <Text variant="Poppins_600SemiBold" fontSize={16} color="grayText">
              2000ml
            </Text>
          </S.DailyGoal>

          <Spacer height={30} />

          <Button title="Ir para a dashboard" height={48} />

          <Text
            variant="Poppins_500Medium"
            fontSize={12}
            color="grayQuaternary"
            textAlign="center"
            style={{
              paddingLeft: scale(30),
              paddingRight: scale(30),
              marginTop: scale(9),
            }}
          >
            Você conseguiu 50% da meta de hoje, mantenha o foco na sua saúde!
          </Text>
        </S.ContainerDailyGoal>

        <Spacer height={20} />
      </S.ScrollView>
    </S.Container>
  );
}
