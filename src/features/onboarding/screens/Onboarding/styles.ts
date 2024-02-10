import { Dimensions } from "react-native";
import { scale } from "react-native-size-matters";

import styled from "styled-components/native";
const { width } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Screen = styled.View`
  flex: 1;
  position: relative;
`;

export const ContentItem = styled.View`
  position: absolute;
  width: ${width}px;
  height: 100%;
`;

export const Item = styled.View`
  flex: 1;
  align-items: center;
  padding-left: ${scale(16)}px;
  padding-right: ${scale(16)}px;
`;

export const ContainerIndicator = styled.View`
  flex-direction: row;
  justify-content: center;
  position: relative;
`;

export const ButonNextScreenThree = styled.TouchableOpacity`
  align-self: center;
  margin-top: ${scale(59)}px;
`;

export const ContainerBottom = styled.View`
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  bottom: ${scale(62)}px;

  padding-left: ${scale(35)}px;
  padding-right: ${scale(35)}px;
`;
