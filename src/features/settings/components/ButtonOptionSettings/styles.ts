import { scale } from "react-native-size-matters";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding-top: ${scale(17)}px;
  padding-bottom: ${scale(17)}px;

  justify-content: space-between;
  align-items: center;
`;
