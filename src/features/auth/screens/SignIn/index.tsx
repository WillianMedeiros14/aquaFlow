import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { Controller } from "react-hook-form";
import LayoutSignInAndSignUp from "../../layouts/LayoutSignInAndSignUp";
import { Spacer } from "@global/components/Spacer";
import { TextInput } from "@global/components/TextInput";
import { useSignIn } from "../../hooks/useSignIn";
import { ISignIn } from "../../types/auth";

import * as S from "./styles";
import { FacebookSvg, GoogleSvg } from "@assets/icons";
import { scale } from "react-native-size-matters";
import { HEIGHT } from "@features/onboarding/screens/Onboarding";
import Text from "@global/components/Text";
import { ButtonOptionAuth } from "../../components/ButtonOptionAuth";
import { AuthScreenNavigationProp } from "routes/auth.routes";
import { StatusBar } from "react-native";

export default function SignIn() {
  const navigation = useNavigation<AuthScreenNavigationProp>();

  const { mutate, isPending, control, handleSubmit, errors } = useSignIn();

  const [errorLogin, setErrorLogin] = useState("");

  const onSubmit = async (dataForm: ISignIn) => {
    const dataSend = {
      email: dataForm.email.trim(),
      password: dataForm.password.trim(),
    };

    console.log({ dataSend });
    mutate(dataSend);
  };

  function ComponentBottom() {
    return (
      <S.Container>
        <S.ButtonForgotPassword
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <Text
            variant="Poppins_400Regular"
            fontSize={12}
            color="blueSecondary"
            textDecorationLine="underline"
          >
            Esqueceu a senha?
          </Text>
        </S.ButtonForgotPassword>
        <Spacer height={40} />

        <Text variant="Poppins_500Medium" fontSize={12} color="blackSecondary">
          - ou continuar com -
        </Text>

        <Spacer height={20} />

        <S.ContainerButtonLoginSocial>
          <GoogleSvg width={scale(108)} height={scale(44)} />
          <Spacer width={10} />
          <FacebookSvg width={scale(108)} height={scale(44)} />
        </S.ContainerButtonLoginSocial>

        <Spacer height={37} />

        <ButtonOptionAuth
          textLeft="Não possui uma conta?"
          textRight="Inscrever-se"
          onPress={() => navigation.navigate("SignUp")}
        />

        <Spacer height={10} />
      </S.Container>
    );
  }

  return (
    <LayoutSignInAndSignUp
      title="Conecte-se."
      description="Faça login com segurança em sua conta"
      isHeader={false}
      onPress={handleSubmit(onSubmit)}
      titleButton="Entrar"
      isLoad={isPending}
      componentBottom={<ComponentBottom />}
    >
      <StatusBar
        translucent
        barStyle={"dark-content"}
        backgroundColor={"white"}
      />
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            title="E-mail"
            placeholder="contato@email.com"
            keyboardType="email-address"
            icon="email"
            value={value}
            onChangeText={(text: string) => {
              const textParse = text.trim();

              onChange(textParse);
            }}
            textError={errors.email?.message}
          />
        )}
        name="email"
      />

      <Spacer height={20} />

      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            title="Senha"
            placeholder="********"
            isPassword
            icon="lock"
            value={value}
            onChangeText={(text: string) => {
              const textParse = text.trim();
              onChange(textParse);
            }}
            textError={errors.password?.message}
          />
        )}
        name="password"
      />

      <Spacer height={9} />
    </LayoutSignInAndSignUp>
  );
}
