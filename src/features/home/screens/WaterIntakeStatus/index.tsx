import React from "react";

import * as S from "./styles";
import {
  ConfettiPng,
  GoldTrophyInAirPng,
  GoldTrophyInAirSvg,
  HappyEmojiSvg,
} from "@assets/icons";
import { scale } from "react-native-size-matters";
import Text from "@global/components/Text";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Spacer } from "@global/components/Spacer";
import { Button } from "@global/components/Button";
import { AppScreenNavigationProp } from "routes/app.routes";
import { useNavigation } from "@react-navigation/native";

const months = {
  "01": "Jan",
  "02": "Fev",
  "03": "Mar",
  "04": "Abr",
  "05": "Mai",
  "06": "Jun",
  "07": "Jul",
  "08": "Ago",
  "09": "Set",
  "10": "Out",
  "11": "Nov",
  "12": "Dez",
};

export type MonthsType = keyof typeof months;

export default function WaterIntakeStatus() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<AppScreenNavigationProp>();

  const date = new Date();

  const day = String(date.getDate()).padStart(2, "0");
  const getMonth = String(date.getMonth() + 1).padStart(2, "0") as MonthsType;
  const dateFormatted = day + " " + months[getMonth];

  return (
    <S.Container>
      <S.ScrollView>
        <Spacer height={insets.top + 21} />
        <Text
          variant="Poppins_600SemiBold"
          fontSize={20}
          color="grayText"
          textAlign="center"
        >
          Hoje - {dateFormatted}
        </Text>

        <Spacer height={15} />

        <Text
          variant="Poppins_500Medium"
          fontSize={14}
          color="grayQuaternary"
          textAlign="center"
        >
          Oi, Paciente,
        </Text>

        <Spacer height={15} />

        <S.Center>
          <HappyEmojiSvg width={scale(100)} height={scale(100)} />
        </S.Center>

        <S.ContainerText>
          <S.ContainerConfetti>
            <S.ImageConfetti source={ConfettiPng} />
          </S.ContainerConfetti>

          <Text variant="Poppins_700Bold" fontSize={24} color="black">
            Parabéns!
          </Text>

          <Spacer height={15} />

          <Text variant="Poppins_600SemiBold" fontSize={16} color="black">
            Aqua arquivou seu objetivo hoje
          </Text>

          <Spacer height={5} />

          <Text
            variant="Poppins_400Regular"
            fontSize={14}
            color="grayTextSecondary"
          >
            Você pode conseguir tudo o que deseja na vida se apenas ajudar
            outras pessoas a conseguirem o que desejam.
          </Text>

          <S.ContainerTrophy>
            <S.ImageTrophy source={GoldTrophyInAirPng} />
          </S.ContainerTrophy>
        </S.ContainerText>

        <S.ContainerButton>
          <Button title="Ir para Inicio" onPress={() => navigation.goBack()} />
        </S.ContainerButton>

        <Spacer height={insets.top + 50} />
      </S.ScrollView>
    </S.Container>
  );
}
