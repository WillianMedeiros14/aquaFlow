import { scale } from "react-native-size-matters";
import styled from "styled-components/native";

export const DotComponent = styled.View`
  width: ${scale(8)}px;
  height: ${scale(8)}px;
  border-radius: ${scale(4)}px;
  margin: ${scale(2)}px;
  background-color: #000;
`;
