import { SafeAreaView } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";
import styled from "styled-components/native";

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const ScrollView = styled.ScrollView`
  padding-left: ${scale(16)}px;
  padding-right: ${scale(16)}px;
`;

export const ContainerLogo = styled.View`
  margin-bottom: ${scale(17)}px;
  border-width: ${scale(1)}px;
  border-color: ${({ theme }) => theme.colors.primary};
  width: ${scale(50)}px;
  height: ${scale(50)}px;
  border-radius: ${scale(8)}px;
`;

export const Line = styled.View`
  height: ${scale(4)}px;
  width: ${scale(158)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${scale(10)}px;
`;

export const ButtonOption = styled.TouchableOpacity`
  align-self: center;
  flex-direction: row;
`;

export const ContainerButtonOption = styled.View`
  justify-content: flex-end;
`;
