import Text from "@global/components/Text";
import * as S from "./styles";
import { RightArrowSvg } from "@assets/icons";
import { ColorType } from "@theme/theme/typesTheme";

interface IButtonOptionSettingsProps {
  title: string;
  isIconRight?: boolean;
  onPress: () => void;
  colorText?: ColorType;
}

export function ButtonOptionSettings({
  title,
  isIconRight,
  onPress,
  colorText = "black",
}: IButtonOptionSettingsProps) {
  return (
    <S.Container onPress={onPress}>
      <Text variant="Poppins_400Regular" fontSize={14} color={colorText}>
        {title}
      </Text>

      {isIconRight && <RightArrowSvg />}
    </S.Container>
  );
}
