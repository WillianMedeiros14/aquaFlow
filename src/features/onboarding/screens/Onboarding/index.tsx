import React, { useRef } from "react";
import { Dimensions, ScrollView, StatusBar } from "react-native";

import {
  Container,
  ContainerIndicator,
  ContentItem,
  Item,
  Screen,
  ContainerBottom,
} from "./styles";

import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import {
  ScreenOneSvg,
  ScreenThreeSvg,
  ScreenTwoSvg,
} from "@assets/vector/onboarding";
import StepIndicator from "../components/StepIndicator";
import { Spacer } from "@global/components/Spacer";
import Text from "@global/components/Text";
import { Button } from "@global/components/Button";

const { width, height } = Dimensions.get("window");

export const WIDTH = width;
export const HEIGHT = height;

const DATA_ITEMS = [
  {
    key: "one",
    image: <ScreenOneSvg width={WIDTH * 0.8} />,
    title: "Acompanhe sua ingestão diária de água conosco.",
    text: "Alcance seus objetivos de hidratação com um simples toque!",
  },
  {
    key: "two",
    image: <ScreenTwoSvg width={WIDTH * 0.8} />,
    title: "Lembretes inteligentes adaptados para você",
    text: "Rápido e fácil de definir sua meta de hidratação e acompanhar o progresso diário da ingestão de água.",
  },
  {
    key: "three",
    image: <ScreenThreeSvg width={WIDTH * 0.8} />,
    title: "Fácil de usar – Beba, Toque, Repita",
    text: "Manter-se hidratado todos os dias é fácil com o Aqua Flow",
  },
];

export default function Onboarding() {
  const theme = useTheme();

  const insets = useSafeAreaInsets();
  const navigation = useNavigation<any>();
  const positionX = useSharedValue(0);

  const valueOpacityJump = useSharedValue(1);

  const scrollRef = useRef<ScrollView>(null);

  function changeValueOpacity(value: number) {
    valueOpacityJump.value = interpolate(
      value,
      Array.from({ length: DATA_ITEMS.length }, (_, i) => width * i),
      [1, 1, 0]
    );
  }

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      positionX.value = event.contentOffset.x;

      runOnJS(changeValueOpacity)(positionX.value);
    },
  });

  const handleNextScreenOrNavigateToLogin = () => {
    const currentScreen = Math.round(positionX.value / width);

    if (currentScreen < DATA_ITEMS.length - 1) {
      const offsetX = width * (currentScreen + 1);

      scrollRef.current?.scrollTo({ x: offsetX, y: 0, animated: true });
    } else if (currentScreen === DATA_ITEMS.length - 1) {
      handleJump();
    }
  };

  function handleJump() {
    console.log("proxima tela");
    // navigation.navigate("SignIn");
  }

  const jumpButtonVisibility = useAnimatedStyle(() => {
    return { display: valueOpacityJump.value === 1 ? "none" : "flex" };
  });

  const nextButtonVisibility = useAnimatedStyle(() => {
    return { display: valueOpacityJump.value === 1 ? "flex" : "none" };
  });

  return (
    <Container>
      <StatusBar
        translucent
        barStyle={"light-content"}
        backgroundColor={theme.colors.white}
      />

      <Spacer height={insets.top + 10} />

      <ContainerBottom>
        <ContainerIndicator>
          {DATA_ITEMS.map(({ key }, index) => (
            <StepIndicator
              key={`${key}+11`}
              scrollX={positionX}
              index={index}
            />
          ))}
        </ContainerIndicator>

        <Spacer height={70} />

        <Animated.View style={[nextButtonVisibility]}>
          <Button
            title={"PRÓXIMO"}
            onPress={handleNextScreenOrNavigateToLogin}
          />
        </Animated.View>

        <Animated.View style={[jumpButtonVisibility]}>
          <Button
            title={"COMEÇAR"}
            onPress={handleNextScreenOrNavigateToLogin}
          />
        </Animated.View>
      </ContainerBottom>

      <Animated.ScrollView
        ref={scrollRef as any}
        horizontal
        pagingEnabled
        decelerationRate="fast"
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        style={{
          flex: 1,
        }}
      >
        {DATA_ITEMS.map((item) => {
          return (
            <Screen
              key={item.key}
              style={{
                width: WIDTH,
              }}
            >
              <ContentItem>
                <Item>
                  {item.image}
                  <Spacer height={24} />
                  <Text
                    variant="Inter_700Bold"
                    fontSize={24}
                    color={"black"}
                    textAlign="center"
                  >
                    {item.title}
                  </Text>

                  <Spacer height={24} />

                  <Text
                    variant="Poppins_400Regular"
                    fontSize={14}
                    color={"gray"}
                    textAlign="center"
                  >
                    {item.text}
                  </Text>
                </Item>
              </ContentItem>
            </Screen>
          );
        })}
      </Animated.ScrollView>
    </Container>
  );
}
