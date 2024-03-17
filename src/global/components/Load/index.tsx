import React from "react";
import * as S from "./styles";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";
import Text from "../Text";

export function Load({ text }: { text?: string }) {
  const theme = useTheme();
  return (
    <S.ConTainer>
      <ActivityIndicator color={theme.colors.primary} />

      {text && (
        <Text variant="Inter_400Regular" textAlign="center">
          {text}
        </Text>
      )}
    </S.ConTainer>
  );
}
