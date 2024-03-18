import { scale } from "react-native-size-matters";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: ${scale(30)}px;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding-top: 20px;
  flex-wrap: wrap;
`;

export const ViewConsumption = styled.View`
  width: ${scale(154)}px;
  height: ${scale(236)}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${scale(16)}px;

  overflow: hidden;
`;

export const ViewConsumptionWater = styled.View`
  position: absolute;
  padding-top: ${scale(10)}px;
  padding-right: ${scale(10)}px;
  padding-left: ${scale(20)}px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const ContainerConsumptionText = styled.View`
  flex: 1;
  justify-content: space-between;
`;
