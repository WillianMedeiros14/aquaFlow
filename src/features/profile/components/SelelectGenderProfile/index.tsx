import Text from "@global/components/Text";
import * as S from "./styles";

export type TypeGender = "Masc." | "Fem." | "Outro";

interface ISelectGenderProfileProps {
  value?: TypeGender;
  type?: TypeGender;
  typeSelected?: TypeGender;
  onPress: (value?: TypeGender) => void;
  disabled: boolean;
}

export function SelectGenderProfile({
  value,
  type,
  typeSelected,
  onPress,
  disabled = true,
}: ISelectGenderProfileProps) {
  return (
    <S.Container disabled={disabled} onPress={() => onPress(type)}>
      <S.CircleSelect>
        {type === typeSelected && <S.CircleSelectBackground />}
      </S.CircleSelect>
      <Text variant="Poppins_500Medium" fontSize={14} color="black">
        {value}
      </Text>
    </S.Container>
  );
}
