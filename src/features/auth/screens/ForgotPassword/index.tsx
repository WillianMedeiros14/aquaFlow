import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Controller } from "react-hook-form";
import LayoutSignInAndSignUp from "../../layouts/LayoutSignInAndSignUp";
import { Spacer } from "@global/components/Spacer";
import { TextInput } from "@global/components/TextInput";
import { IForgotPassword } from "../../types/auth";
import * as S from "./styles";

import { AuthScreenNavigationProp } from "routes/auth.routes";

import { useForgotPassword } from "@features/auth/hooks/useForgotPassword";

export default function ForgotPassword() {
  const navigation = useNavigation<AuthScreenNavigationProp>();

  const { mutate, isPending, control, handleSubmit, errors } =
    useForgotPassword();

  const onSubmit = (dataForm: IForgotPassword) => {
    const dataSend: IForgotPassword = {
      email: dataForm.email.trim(),
    };

    mutate(dataSend);
  };

  function ComponentBottom() {
    return (
      <S.Container>
        <Spacer height={1} />

        <Spacer height={10} />
      </S.Container>
    );
  }

  return (
    <LayoutSignInAndSignUp
      title="Esqueceu a senha?"
      description="Informe seu e-mail cadastrado para ser enviado um email de alteração de senha."
      onPress={handleSubmit(onSubmit)}
      titleButton="Confirmar"
      isLoad={isPending}
      componentBottom={<ComponentBottom />}
    >
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            title="E-mail"
            placeholder="E-mail"
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
    </LayoutSignInAndSignUp>
  );
}
