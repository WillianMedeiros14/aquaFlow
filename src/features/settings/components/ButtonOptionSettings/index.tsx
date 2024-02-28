import Text from "@global/components/Text";
import * as S from "./styles";
import { RightArrowSvg } from "@assets/icons";

interface IButtonOptionSettingsProps {
  title: string;

  isIconRight?: boolean;
}

export function ButtonOptionSettings({
  title,
  isIconRight,
}: IButtonOptionSettingsProps) {
  return (
    <S.Container>
      <Text variant="Poppins_400Regular" fontSize={14} color="black">
        {title}
      </Text>

      {isIconRight && <RightArrowSvg />}
    </S.Container>
  );
}
