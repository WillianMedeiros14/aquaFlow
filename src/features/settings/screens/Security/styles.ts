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
