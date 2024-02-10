import { scale } from "react-native-size-matters";
import styled from "styled-components/native";

import { RectButton } from "react-native-gesture-handler";
import { ColorType } from "@theme/theme/typesTheme";

export const Container = styled.View<{
  height: number;
  backgroundColor: ColorType;
}>`
  height: ${({ height }) => scale(height)}px;
  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor]};
  border-radius: ${scale(10)}px;
  overflow: hidden;
`;

export const Content = styled(RectButton)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-left: ${scale(11)}px;
  padding-right: ${scale(11)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
