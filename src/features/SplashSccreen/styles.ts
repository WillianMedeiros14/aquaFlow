import theme from "@theme/theme/theme";
import { scale } from "react-native-size-matters";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.primary};

  position: relative;
`;

export const ContainerText = styled.View`
  position: relative;
  z-index: 1;
  align-items: center;
  align-self: center;
  padding: 16px;
`;

export const Content = styled.View`
  flex: 1;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
`;

export const ContentWaveAnimation = styled.View`
  width: 100%;
  flex: 1;
  height: 100%;
  justify-content: flex-end;
  position: relative;
  /* bottom: ${scale(-280)}px; */
`;
