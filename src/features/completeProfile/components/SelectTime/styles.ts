import { scale } from "react-native-size-matters";
import styled from "styled-components/native";

export const Container = styled.View`
  /* align-items: center;
  justify-content: center; */
  align-self: flex-start;
  flex-direction: row;
`;

export const ButtonSelectTime = styled.TouchableOpacity`
  width: ${scale(86)}px;
  align-items: center;
  justify-content: center;
  border-radius: ${scale(6)}px;
  padding: ${scale(5)}px ${scale(8)}px ${scale(0)}px ${scale(8)}px;
  background-color: rgba(118, 118, 128, 0.2);
`;

export const ContainerTypeTime = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: ${scale(6)}px;
  padding: ${scale(5)}px ${scale(8)}px ${scale(5)}px ${scale(8)}px;
  background-color: rgba(118, 118, 128, 0.2);
  flex-direction: row;
`;

export const ContentContainerType = styled.View<{ isActive: boolean }>`
  align-items: center;
  justify-content: center;
  border-width: ${scale(0.5)}px;
  border-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : "transparent"};
  background-color: ${({ isActive }) =>
    isActive ? "rgba(134, 181, 237, 0.3)" : "transparent"};
  padding: ${scale(5)}px ${scale(8)}px ${scale(0)}px ${scale(8)}px;
  border-radius: ${scale(4.93)}px;
`;
