import Text from "@global/components/Text";
import * as S from "./styles";
import { StatusBar } from "react-native";
import theme from "@theme/theme/theme";
import { NotificationSvg } from "@assets/icons";
import { scale } from "react-native-size-matters";

export function AnalyzeHomeScreen() {
  return (
    <S.Container>
      <Text variant="Poppins_600SemiBold" fontSize={20} color="grayText">
        Para hoje
      </Text>
    </S.Container>
  );
}
