import { SafeAreaView } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  padding-top: 15px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-bottom: ${scale(5)}px;
`;
