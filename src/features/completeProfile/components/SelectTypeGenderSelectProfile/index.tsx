import React from "react";

import * as S from "./styles";
import {
  GenderAllCompleteProfileSvg,
  MaleGenderCompleteProfileSvg,
  FemaleGenderCompleteProfileSvg,
  CheckSvg,
} from "@assets/icons";
import { TypeGender } from "@features/profile/components/SelelectGenderProfile";

const iconsSelectTypeGenderSelectProfile = {
  all: <GenderAllCompleteProfileSvg />,
  male: <MaleGenderCompleteProfileSvg />,
  female: <FemaleGenderCompleteProfileSvg />,
};

export type IconsTypeGenderSelectProfile =
  keyof typeof iconsSelectTypeGenderSelectProfile;

interface ISelectTypeGenderSelectProfileProps {
  typeIcon: IconsTypeGenderSelectProfile;
  onPress: (type: TypeGender) => void;
  typeSelect: TypeGender;
  type: TypeGender;
}

export function SelectTypeGenderSelectProfile({
  typeIcon,
  onPress,
  typeSelect,
  type,
}: ISelectTypeGenderSelectProfileProps) {
  return (
    <S.Container onPress={() => onPress(type)}>
      {iconsSelectTypeGenderSelectProfile[typeIcon]}

      {type === typeSelect && (
        <S.ContainerCheck>
          <CheckSvg />
        </S.ContainerCheck>
      )}
    </S.Container>
  );
}
