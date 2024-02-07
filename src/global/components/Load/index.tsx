import React from "react";
import * as S from "./styles";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";

export function Load() {
  const theme = useTheme();
  return (
    <S.ConTainer>
      <ActivityIndicator color={theme.colors.white} />
    </S.ConTainer>
  );
}
