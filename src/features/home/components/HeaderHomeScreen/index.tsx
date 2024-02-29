import Text from "@global/components/Text";
import * as S from "./styles";
import { StatusBar } from "react-native";
import theme from "@theme/theme/theme";
import { NotificationSvg } from "@assets/icons";
import { scale } from "react-native-size-matters";

export function HeaderHomeScreen() {
  return (
    <S.Container>
      <S.ContentLeft>
        <Text variant="Poppins_500Medium" fontSize={15} color="grayQuaternary">
          Bom dia,
        </Text>

        <Text variant="Poppins_600SemiBold" fontSize={20} color="grayText">
          Paciente
        </Text>
      </S.ContentLeft>

      <S.ButtonNotification>
        <NotificationSvg width={scale(20)} height={scale(20)} />

        <S.InfoNotification />
      </S.ButtonNotification>
    </S.Container>
  );
}
