import * as S from "./styles";
import { HeaderHomeScreen } from "@features/home/components/HeaderHomeScreen";
import { Dimensions, StatusBar } from "react-native";
import theme from "@theme/theme/theme";
import { BackGroundAddConsumptionHomeSvg } from "@assets/vector";
import { scale } from "react-native-size-matters";
import { Spacer } from "@global/components/Spacer";
import Text from "@global/components/Text";
import AnimatedSVG from "@features/home/components/AnimatedSVG";

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

        <AnimatedSVG />
      </S.ScrollView>
    </S.Container>
  );
}
