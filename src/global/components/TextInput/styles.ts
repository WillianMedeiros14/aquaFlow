import { scale } from "react-native-size-matters";

import styled from "styled-components/native";

export const Container = styled.TouchableOpacity<{
  multiline?: boolean;
  isFocus?: boolean;
  isEdit?: boolean;
}>`
  min-height: ${({ multiline }) => (multiline ? `${scale(80)}px` : undefined)};
  height: ${({ multiline }) => (!multiline ? `${scale(52)}px` : undefined)};
  border-radius: ${scale(10)}px;
  border-width: ${scale(1)}px;
  border-color: ${({ isFocus, theme }) =>
    isFocus ? theme.colors.primary : "transparent"};

  background-color: ${({ theme, isEdit }) =>
    isEdit ? theme.colors.backgroundInput : theme.colors.backGroundEditInput};
  flex-direction: row;
  align-items: center;
  padding-left: ${scale(20)}px;
`;

export const RNTextInput = styled.TextInput`
  flex: 1;
  padding-left: ${scale(10)}px;
  padding-right: ${scale(17)}px;
  padding-top: ${scale(10)}px;
  padding-bottom: ${scale(5)}px;
  font-size: ${scale(12)}px;
  font-family: ${({ theme }) =>
    theme.textVariants.Poppins_400Regular.fontFamily};
  color: ${({ theme }) => theme.colors.gray};
`;

export const ButtonEye = styled.TouchableOpacity`
  height: 100%;
  width: ${scale(50)}px;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
