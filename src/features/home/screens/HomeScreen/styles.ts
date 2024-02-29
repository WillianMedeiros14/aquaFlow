import { scale } from "react-native-size-matters";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f4f8fb;
`;

export const ContainerHeader = styled.View`
  margin-top: ${scale(24)}px;
  padding-left: ${scale(16)}px;
  padding-right: ${scale(16)}px;
`;

export const ScrollView = styled.ScrollView`
  padding-left: ${scale(16)}px;
  padding-right: ${scale(16)}px;
`;

export const ContainerAddConsumption = styled.View`
  position: relative;
  width: 100%;
  height: ${scale(160)}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${scale(16)}px;
  overflow: hidden;
  position: relative;
`;

export const ContainerConsumptionText = styled.View``;

export const ContentAddConsumption = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding-top: ${scale(10)}px;
  padding-right: ${scale(20)}px;
  padding-bottom: ${scale(30)}px;
  padding-left: ${scale(20)}px;

  justify-content: space-between;
`;

export const ButtonAddConsumption = styled.TouchableOpacity`
  padding-top: ${scale(4)}px;
  padding-right: ${scale(23)}px;
  padding-bottom: ${scale(4)}px;
  padding-left: ${scale(23)}px;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${scale(25)}px;

  align-self: flex-start;
`;
