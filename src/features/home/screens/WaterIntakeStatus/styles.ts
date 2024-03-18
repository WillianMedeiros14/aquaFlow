import { SafeAreaView } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ScrollView = styled.ScrollView`
  flex: 1;

  padding: ${scale(16)}px;
`;

export const Center = styled.View`
  align-self: center;
`;

export const ContainerText = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backGroundEditInput};
  border-radius: ${scale(20)}px;

  margin-top: ${scale(45)}px;
  padding: ${scale(54)}px ${scale(27)}px ${scale(110)}px ${scale(27)}px;
  position: relative;
`;

export const ContainerTrophy = styled.View`
  position: absolute;
  bottom: ${scale(-65)}px;
  margin-left: ${scale(20)}px;
`;

export const ImageTrophy = styled.Image`
  width: ${scale(150)}px;
`;

export const ContainerButton = styled.View`
  width: 60%;
  align-self: center;
  margin-top: ${scale(70)}px;
`;

export const ContainerConfetti = styled.View`
  position: absolute;
  top: ${scale(-45)}px;
  right: ${scale(-10)}px;
`;

export const ImageConfetti = styled.Image`
  width: ${scale(100)}px;
  height: ${scale(108)}px;
`;
