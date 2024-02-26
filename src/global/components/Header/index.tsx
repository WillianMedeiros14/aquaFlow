import React from "react";

import * as S from "./styles";
import { BackButtonHeaderSvg, EditSvg } from "@assets/icons";
import Text from "../Text";

import { Spacer } from "../Spacer";

import { scale } from "react-native-size-matters";

interface IHeaderProps {
  title?: string;
  onPressLeft?: () => void;
  onPressRight?: () => void;
}

export function Header({ onPressLeft, onPressRight, title }: IHeaderProps) {
  return (
    <S.Container>
      {onPressLeft && (
        <S.Button onPress={onPressLeft}>
          <BackButtonHeaderSvg />
        </S.Button>
      )}

      {title && (
        <Text
          variant="Poppins_600SemiBold"
          color="black"
          fontSize={20}
          textAlign="center"
          style={{
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",

            right: scale(32),
            left: scale(32),
            bottom: 0,
          }}
        >
          {title}
        </Text>
      )}

      {onPressRight && (
        <S.Button onPress={onPressRight}>
          <EditSvg />
        </S.Button>
      )}
    </S.Container>
  );
}
