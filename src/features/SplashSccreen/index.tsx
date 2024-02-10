import React, { useEffect } from "react";

import { DropLogoSvg } from "@assets/icons";

import * as S from "./styles";
import Text from "@global/components/Text";
import { Spacer } from "@global/components/Spacer";

import LottieView from "lottie-react-native";

import { LoadSplashAnimation } from "@assets/animations";
import { scale } from "react-native-size-matters";

import { Dimensions } from "react-native";
import { WaveSplashSvg } from "@assets/vector";

const { width } = Dimensions.get("window");

export function SplashScreen() {
  return (
    <S.Container>
      <S.Content>
        <S.ContainerText>
          <DropLogoSvg />

          <Spacer height={5} />

          <Text variant="Poppins_700Bold" fontSize={24} color="white">
            AQUA FLOW
          </Text>

          <Spacer height={5} />

          <Text
            variant="Poppins_500Medium"
            fontSize={14}
            color="white"
            textAlign="center"
          >
            Mantenha-se hidratado e monitore sua ingestão diária de água
          </Text>
        </S.ContainerText>

        <LottieView
          autoPlay={true}
          source={LoadSplashAnimation}
          loop={true}
          style={{
            width: scale(300),
            height: scale(150),
            marginTop: scale(-50),
            zIndex: 0,
          }}
        />
      </S.Content>

      <S.ContentWaveAnimation>
        <WaveSplashSvg width={width} />
      </S.ContentWaveAnimation>
    </S.Container>
  );
}
