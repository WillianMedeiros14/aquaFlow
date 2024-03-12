import Text from "@global/components/Text";
import * as S from "./styles";

interface IButtonOptionAuthProps {
  textLeft: string;
  textRight: string;
  onPress: () => void;
}

export function ButtonOptionAuth({
  textLeft,
  textRight,
  onPress,
}: IButtonOptionAuthProps) {
  return (
    <S.Container>
      <Text variant="Poppins_400Regular" color="blackSecondary">
        {textLeft}{" "}
      </Text>

      <S.ButtonAction onPress={onPress}>
        <Text variant="Poppins_600SemiBold" color="blueSecondary">
          {textRight}
        </Text>
      </S.ButtonAction>
    </S.Container>
  );
}
