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
