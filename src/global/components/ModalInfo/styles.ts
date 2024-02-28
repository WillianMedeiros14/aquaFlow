import { scale } from "react-native-size-matters";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding-top: ${scale(23.5)}px;
  padding-right: ${scale(16)}px;
  padding-bottom: ${scale(38)}px;
  padding-left: ${scale(16)}px;
`;

export const Content = styled.View`
  width: 100%;
  padding-right: ${scale(10)}px;
  padding-left: ${scale(10)}px;
  align-items: center;
`;
