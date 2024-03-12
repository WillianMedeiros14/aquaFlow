import { scale } from "react-native-size-matters";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CircleSelect = styled.View`
  align-items: center;
  justify-content: center;
  width: ${scale(20)}px;
  height: ${scale(20)}px;
  border-radius: ${scale(10)}px;
  border-width: ${scale(1)}px;
  border-color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.white};
  margin-right: ${scale(4)}px;
`;

export const CircleSelectBackground = styled.View`
  width: ${scale(14)}px;
  height: ${scale(14)}px;

  border-radius: ${scale(10)}px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
