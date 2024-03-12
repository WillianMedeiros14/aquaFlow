import React, { useEffect, useRef, useState } from "react";

import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated,
  Text,
  Dimensions,
  SafeAreaView,
  Keyboard,
} from "react-native";
import { IconsTabBar } from "./IconsTab";
import theme from "@theme/theme/theme";

const { width } = Dimensions.get("window");

const TAB_BAR_WIDTH = width / 5;
const ANIMATED_PART_HEIGHT = 5;

const TabBar = ({ state, descriptors, navigation }) => {
  const animationHorizontalValue = useRef(new Animated.Value(0)).current;
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  const animate = (index) => {
    Animated.spring(animationHorizontalValue, {
      toValue: index * TAB_BAR_WIDTH,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animate(state.index);
  }, [state.index]);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <SafeAreaView
      style={[styles.container, { display: keyboardStatus ? "none" : "flex" }]}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableWithoutFeedback
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabButton}
              key={`${index}--${route.key}`}
            >
              <View style={styles.innerView}>
                <IconsTabBar
                  label={route.name}
                  color={isFocused ? theme.colors.primary : theme.colors.black}
                />

                {route.name !== "AlarmScreenTab" ? (
                  <Text
                    style={[
                      styles.text,
                      {
                        color: isFocused
                          ? theme.colors.primary
                          : theme.colors.black,
                      },
                    ]}
                  >
                    {label}
                  </Text>
                ) : null}
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>

      <Animated.View style={styles.animatedWrapper}>
        <Animated.View
          style={[
            styles.animatedView,
            {
              transform: [{ translateX: animationHorizontalValue }],
            },
          ]}
        >
          <Animated.View style={styles.lineIndicator} />
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderTopColor: "rgba(0,0,0,0.1)",
    borderTopWidth: 1,
    backgroundColor: theme.colors.white,
    paddingBottom: 10,
    paddingTop: 8,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  innerView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: 8,
    marginBottom: 8,
  },
  iconText: {
    width: TAB_BAR_WIDTH,
    textAlign: "center",
  },
  animatedView: {
    width: TAB_BAR_WIDTH,
    height: ANIMATED_PART_HEIGHT,
    alignItems: "center",
  },
  animatedWrapper: {
    width: TAB_BAR_WIDTH,
  },
  text: {
    fontFamily: theme.textVariants.Poppins_400Regular.fontFamily,
    fontSize: 12,
    marginTop: 4,
  },

  lineIndicator: {
    backgroundColor: theme.colors.primary,
    height: 2,
    width: 48,
    borderRadius: 9,
  },
});

export default TabBar;
