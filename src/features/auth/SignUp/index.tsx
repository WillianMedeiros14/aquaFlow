import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Controller } from "react-hook-form";
import LayoutSignInAndSignUp from "../layouts/LayoutSignInAndSignUp";
import { Spacer } from "@global/components/Spacer";
import { TextInput } from "@global/components/TextInput";
import { ISignUp } from "../types/auth";
import * as S from "./styles";
import { ButtonOptionAuth } from "../components/ButtonOptionAuth";
import { useSignUp } from "../hooks/useSignUp";
import Text from "@global/components/Text";

export default function SignUp() {
  const navigation = useNavigation<any>();

  const { isPending, control, handleSubmit, errors } = useSignUp();

  const onSubmit = (dataForm: ISignUp) => {
    const dataSend = {
      email: dataForm.email.trim(),
      password: dataForm.password.trim(),
    };

    console.log({ dataSend });
    // mutate(dataSend);
  };

  function ComponentBottom() {
    return (
      <S.Container>
        <Spacer height={1} />

        <ButtonOptionAuth
          textLeft="Já tem uma conta?"
          textRight="Entre"
          onPress={() => {}}
        />

        <Spacer height={10} />
      </S.Container>
    );
  }

  return (
    <LayoutSignInAndSignUp
      title="Crie uma conta."
      description="Faça login com segurança em sua conta"
      onPress={handleSubmit(onSubmit)}
      titleButton="Criar Conta"
      isLoad={isPending}
      componentBottom={<ComponentBottom />}
    >
      <Spacer height={20} />

      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            title="Nome completo"
            placeholder="Nome completo"
            isPassword
            icon="user"
            value={value}
            onChangeText={(text: string) => {
              const textParse = text.trim();
              onChange(textParse);
            }}
            textError={errors.password?.message}
          />
        )}
        name="username"
      />

      <Spacer height={20} />

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
        name="confirmPassword"
      />

      <Spacer height={20} />

      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <>
            <S.ContainerCheckTerms>
              <S.ButtonCheckTerms
                isCheck={value}
                onPress={() => onChange(!value)}
              />

              <S.ContainerTextTerms>
                <Text
                  variant="Poppins_400Regular"
                  fontSize={12}
                  color="graySecondary"
                >
                  Concordo com os{" "}
                  <Text
                    variant="Poppins_600SemiBold"
                    fontSize={12}
                    color="primary"
                  >
                    Termos de uso
                  </Text>{" "}
                  e{" "}
                  <Text
                    variant="Poppins_600SemiBold"
                    fontSize={12}
                    color="primary"
                  >
                    Políticas de Privacidade
                  </Text>
                </Text>
              </S.ContainerTextTerms>
            </S.ContainerCheckTerms>

            {!!errors.acceptTerms?.message ? (
              <Text variant="Inter_400Regular" fontSize={12} color="red">
                {errors.acceptTerms?.message}
              </Text>
            ) : null}
          </>

          // <ConfirmTermsOfUse
          //   isCheck={value}
          //   onPressCheck={onChange}
          //   onPressOpenTerms={() => navigation.navigate("TermsOfUse")}
          //   onPressOpenPrivacyPolicies={() =>
          //     navigation.navigate("PrivacyPolicies")
          //   }
          //   textError={errors.acceptTerms?.message}
          // />
        )}
        name="acceptTerms"
      />

      <Spacer height={9} />
    </LayoutSignInAndSignUp>
  );
}
