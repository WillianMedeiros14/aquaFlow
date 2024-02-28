import React, { useRef } from "react";

import * as S from "./styles";
import { Header } from "@global/components/Header";
import { StatusBar } from "react-native";
import theme from "@theme/theme/theme";
import { useNavigation } from "@react-navigation/native";
import { ButtonOptionSettings } from "@features/settings/components/ButtonOptionSettings";
import { LineSeparate } from "@features/settings/components/LineSeparate";
import { Spacer } from "@global/components/Spacer";
import ModalInfo, { ModalInfoHandler } from "@global/components/ModalInfo";
import { useAuth } from "@global/context/useAuth";
import { useDeleteUserAndData } from "@features/settings/hooks/useDeleteUserAndData";

export default function Security() {
  const navigation = useNavigation();
  const modalDeleteRef = useRef<ModalInfoHandler>(null);

  const user = useAuth((state) => state.user);

  const { isPending, mutate } = useDeleteUserAndData();

  return (
    <S.Container>
      <StatusBar
        translucent
        barStyle={"dark-content"}
        backgroundColor={theme.colors.white}
      />

      <S.ContainerHeader>
        <Header title="Segurança" onPressLeft={() => navigation.goBack()} />
      </S.ContainerHeader>

      <S.ScrollView>
        <Spacer height={10} />
        <ButtonOptionSettings
          colorText="red"
          title="Deletar conta"
          onPress={() => modalDeleteRef.current?.open()}
        />
        <LineSeparate />
      </S.ScrollView>

      <ModalInfo
        ref={modalDeleteRef}
        icon="delete"
        title={`Deseja realmente deletar sua conta?\nPara usar novamente será necessrário criar outra conta.`}
        textButton="ok"
        onPress={() => mutate({ userId: user.uid })}
        isLoad={isPending}
      />
    </S.Container>
  );
}
