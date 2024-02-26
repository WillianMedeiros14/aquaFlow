import { scale } from "react-native-size-matters";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  align-items: center;
  margin-top: ${scale(29)}px;
`;

export const ContainerButtonLoginSocial = styled.View`
  flex-direction: row;
`;

export const ButtonForgotPassword = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const ButtonCheckTerms = styled.TouchableOpacity<{ isCheck?: boolean }>`
  width: ${scale(20)}px;
  height: ${scale(20)}px;
  border-radius: ${scale(10)}px;
  border-width: ${scale(2)}px;
  border-color: ${({ isCheck, theme }) =>
    isCheck ? theme.colors.primary : theme.colors.grayTertiary};
  background-color: ${({ isCheck, theme }) =>
    isCheck ? theme.colors.primary : "transparent"};
`;

export const ContainerCheckTerms = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const ContainerTextTerms = styled.View`
  flex: 1;
  flex-direction: row;
  margin-left: ${scale(10)}px;
  margin-right: ${scale(15)}px;
`;

export const ButtonTermsOfUse = styled.TouchableOpacity`
  background-color: red;
  align-items: flex-end;
`;

export const ButtonPrivacy = styled.TouchableOpacity``;
