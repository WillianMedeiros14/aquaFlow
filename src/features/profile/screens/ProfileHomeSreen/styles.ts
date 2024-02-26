import { scale } from "react-native-size-matters";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ContainerHeader = styled.View`
  padding-left: ${scale(16)}px;
  padding-right: ${scale(16)}px;
`;

export const ScrollView = styled.ScrollView`
  padding-left: ${scale(16)}px;
  padding-right: ${scale(16)}px;
`;

export const ImageUser = styled.Image`
  width: ${scale(100)}px;
  height: ${scale(100)}px;
  border-radius: ${scale(50)}px;
  align-self: center;
  margin-top: ${scale(24)}px;
`;

export const ContainerGender = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const ContainerButton = styled.View`
  width: 100%;
  padding-left: ${scale(16)}px;
  padding-right: ${scale(16)}px;
`;
