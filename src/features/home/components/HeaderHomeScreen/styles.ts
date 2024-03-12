import { scale } from "react-native-size-matters";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContentLeft = styled.View``;

export const ButtonNotification = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${scale(40)}px;
  height: ${scale(40)}px;
  border-radius: ${scale(20)}px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const InfoNotification = styled.View`
  position: relative;
  width: ${scale(10)}px;
  height: ${scale(10)}px;
  border-radius: ${scale(5)}px;
  background-color: ${({ theme }) => theme.colors.red};
  position: absolute;
  top: 0;
  right: 0;
`;
