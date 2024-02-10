import React from "react";
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Dimensions } from "react-native";

import { DotComponent } from "./styles";
import { useTheme } from "styled-components";
const { width } = Dimensions.get("window");

const AnimatedDotComponent = Animated.createAnimatedComponent(DotComponent);

interface PaginatorProps {
  scrollX: SharedValue<number>;
  index: number;
}

const StepIndicator: React.FC<PaginatorProps> = ({ scrollX, index }) => {
  const theme = useTheme();
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const dotAnimateStyles = useAnimatedStyle(() => {
    const dotWidth = interpolate(
      scrollX.value,
      inputRange,
      [23, 23, 23],
      Extrapolation.CLAMP
    );

    const backgroundColor = interpolateColor(scrollX.value, inputRange, [
      theme.colors.lightGrey,
      theme.colors.primary,
      theme.colors.lightGrey,
    ]);

    return {
      width: dotWidth,
      backgroundColor,
    };
  });

  return <AnimatedDotComponent style={dotAnimateStyles} />;
};

export default StepIndicator;
