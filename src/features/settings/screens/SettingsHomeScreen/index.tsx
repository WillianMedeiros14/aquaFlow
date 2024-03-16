import React, { useRef, useState } from "react";

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
import ModalInfo, { ModalInfoHandler } from "@global/components/ModalInfo";
import { auth, signOut } from "../../../../../firebaseConfig";
import Toast from "react-native-toast-message";

export default function SettingsHomeScreen() {
  const navigation = useNavigation();
  const logOut = useAuth((state) => state.logOut);

  const modalSignOutRef = useRef<ModalInfoHandler>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleSignOut() {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        logOut();
        setIsLoading(false);
        modalSignOutRef.current?.close();
      })
      .catch((error) => {
        Toast.show({
          text1: "Erro ao sair da aplicação",
          type: "error",
        });
        setIsLoading(false);
      });
  }

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

        <ButtonOptionSettings
          colorText="red"
          title="Sair"
          onPress={() => modalSignOutRef.current?.open()}
        />

        <LineSeparate />
      </S.ScrollView>

      <ModalInfo
        ref={modalSignOutRef}
        title={`Tem certeza que deseja sair da aplicação?\nPara usar novamente será necessrário entrar com seu email e senha.`}
        textButton="Confirmar"
        onPress={handleSignOut}
        isLoad={isLoading}
      />
    </S.Container>
  );
}
