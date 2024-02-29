import React, { useRef, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path, Rect, ClipPath, Defs } from "react-native-svg";
import Animated, {
  Easing,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const AnimatedPath = Animated.createAnimatedComponent(Path);

const AnimatedSVG = () => {
  const progress = useSharedValue(1);

  return (
    <View style={styles.container}>
      <Svg width="172" height="172" viewBox="0 0 172 172">
        <Defs>
          <ClipPath id="clip">
            <Rect x="8" y="8" width="156" height="156" rx="78" />
          </ClipPath>
        </Defs>
        <Rect
          x="4"
          y="4"
          width="164"
          height="164"
          rx="82"
          stroke="#ADE5FC"
          strokeWidth="8"
          fill="#f4f8fb"
        />
        <AnimatedPath
          clipPath="url(#clip)"
          d="M79.7733 87.8903C6.34604 114.876 -57.7922 29.0533 -119.276 56.4811C-155.99 65.3287 -230.125 83.9973 -232.956 87.8903C-235.787 91.7832 -238.559 177.989 -239.591 220.605L305.805 310.409C342.961 264.549 406.746 159.733 364.635 107.355C311.998 41.8824 153.2 60.9049 79.7733 87.8903Z"
          fill="#3BB8EDB0"
          fillOpacity={progress.value}
        />
        <AnimatedPath
          clipPath="url(#clip)"
          d="M160.558 88.508C98.8535 111.19 44.9553 39.0528 -6.71261 62.1071C-37.5647 69.544 -99.8635 85.2358 -102.243 88.508C-104.621 91.7802 -106.951 164.24 -107.818 200.061L350.502 275.545C381.726 236.998 435.327 148.895 399.94 104.869C355.706 49.8362 222.262 65.8255 160.558 88.508Z"
          fill="#3BB8ED"
          fillOpacity={progress.value}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AnimatedSVG;
