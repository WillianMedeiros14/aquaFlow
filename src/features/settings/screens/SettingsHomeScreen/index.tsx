import React from "react";

import * as S from "./styles";
import { Header } from "@global/components/Header";
import { StatusBar } from "react-native";
import theme from "@theme/theme/theme";
import { useNavigation } from "@react-navigation/native";
import { ButtonOptionSettings } from "@features/settings/components/ButtonOptionSettings";
import { LineSeparate } from "@features/settings/components/LineSeparate";
import { Spacer } from "@global/components/Spacer";
import { useDeleteUserAndData } from "@features/settings/hooks/useDeleteUserAndData";
import { useAuth } from "@global/context/useAuth";

export default function SettingsHomeScreen() {
  const navigation = useNavigation();

  return (
    <S.Container>
      <StatusBar
        translucent
        barStyle={"dark-content"}
        backgroundColor={theme.colors.white}
      />

      <S.ContainerHeader>
        <Header title="Configurações" onPressLeft={() => navigation.goBack()} />
      </S.ContainerHeader>

      <S.ScrollView>
        <Spacer height={10} />
        <ButtonOptionSettings
          title="Segurança"
          isIconRight
          onPress={() =>
            navigation.navigate("SettingsRoutes", {
              screen: "Security",
            })
          }
        />
        <LineSeparate />
      </S.ScrollView>
    </S.Container>
  );
}
