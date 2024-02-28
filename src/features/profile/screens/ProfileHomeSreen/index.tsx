import { Header } from "@global/components/Header";
import * as S from "./styles";
import { ActivityIndicator, Keyboard, StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { AppScreenNavigationProp } from "routes/app.routes";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "@global/components/TextInput";
import { Spacer } from "@global/components/Spacer";
import { useEffect, useMemo, useState } from "react";
import {
  SelectGenderProfile,
  TypeGender,
} from "@features/profile/components/SelelectGenderProfile";
import { Button } from "@global/components/Button";
import { scale } from "react-native-size-matters";
import { useGetUserDetails } from "@features/profile/hooks/useGetUserDetails";
import { auth } from "../../../../../firebaseConfig";
import { useAuth } from "@global/context/useAuth";
import { Load } from "@global/components/Load";
import { useUpdateUser } from "@features/profile/hooks/useUpdateUser";
import { IUpdateUser } from "@features/profile/types/user";
import { IUpdateUserServiceProps } from "@features/profile/services/updateUser.service";
import { Controller } from "react-hook-form";
import { queryClient } from "@global/config/react-query";
import { UserDefaultSvg } from "@assets/icons";

export default function ProfileHomeScreen() {
  const theme = useTheme();
  const navigation = useNavigation<AppScreenNavigationProp>();

  const user = useAuth((state) => state.user);

  const { data, isLoading, refetch } = useGetUserDetails({
    userId: user?.uid,
  });

  const {
    mutate,
    isPending,
    control,
    handleSubmit,
    errors,
    setValue,
    isSuccess,
  } = useUpdateUser();

  const [isEdit, setIsEdit] = useState(false);

  const [keyboardStatus, setKeyboardStatus] = useState(false);

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

  function handleEdit() {
    setIsEdit(!isEdit);
  }

  function handleCancelEdit() {
    setIsEdit(!isEdit);
    setValue("username", data?.userName);
    setValue("email", data?.email);
    setValue("age", data?.age);
    setValue("gender", data?.gender);
  }

  const onSubmit = async (dataForm: IUpdateUser) => {
    const dataSend: IUpdateUserServiceProps = {
      userId: user.uid,
      data: {
        age: dataForm.age,
        gender: dataForm.gender,
        userName: dataForm?.username?.trim(),
      },
    };

    mutate(dataSend);
  };

  const dataAll = useMemo(() => {
    if (data && user.uid) {
      setValue("username", data.userName);
      setValue("email", data.email);
      setValue("age", data.age?.toString());
      setValue("gender", data?.gender);
      setIsEdit(false);
    }
  }, [data, user.uid]);

  const verify = useMemo(() => {
    if (isSuccess) {
      setIsEdit(false);
    }
  }, [isSuccess]);

  return (
    <S.Container>
      <StatusBar
        translucent
        barStyle={"dark-content"}
        backgroundColor={theme.colors.white}
      />

      <S.ContainerHeader>
        <Header
          title={isEdit ? "Editar Perfil" : "Meu perfil"}
          onPressLeft={() => navigation.goBack()}
          onPressRight={isEdit && !!data ? undefined : handleEdit}
        />
      </S.ContainerHeader>

      <S.ScrollView
        contentContainerStyle={{
          paddingBottom: scale(24),
        }}
      >
        {isLoading ? (
          <>
            <Spacer height={30} />
            <Load />
          </>
        ) : (
          <>
            {/* <S.ImageUser
              source={{ uri: "https://github.com/WillianMedeiros14.png" }}
            /> */}

            <S.ContainerImageUser>
              <UserDefaultSvg width={scale(100)} height={scale(100)} />
            </S.ContainerImageUser>

            <Spacer height={30} />

            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  isActiveTitle
                  title="Nome completo"
                  placeholder="Nome completo"
                  value={value}
                  editable={isEdit}
                  onChangeText={(text: string) => {
                    const textParse = text.trimStart();
                    onChange(textParse);
                  }}
                  textError={errors.username?.message}
                />
              )}
              name="username"
            />

            {!isEdit ? (
              <>
                <Spacer height={23} />

                <Controller
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      isActiveTitle
                      title="E-mail"
                      placeholder="E-mail"
                      keyboardType="email-address"
                      editable={false}
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
              </>
            ) : null}

            <Spacer height={23} />

            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  isActiveTitle
                  title="Idade"
                  placeholder="Idade"
                  value={value}
                  editable={isEdit}
                  onChangeText={(text: string) => {
                    const textParse = text.trimStart();
                    if (textParse.length === 0) {
                      onChange(undefined);
                    } else {
                      onChange(textParse);
                    }
                  }}
                  textError={errors.age?.message}
                />
              )}
              name="age"
            />

            <Spacer height={23} />

            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <S.ContainerGender>
                  <SelectGenderProfile
                    typeSelected={value}
                    value={"Masc."}
                    type="Masc."
                    onPress={onChange}
                    disabled={!isEdit}
                  />

                  <Spacer width={25} />

                  <SelectGenderProfile
                    typeSelected={value}
                    value={"Fem."}
                    type="Fem."
                    onPress={onChange}
                    disabled={!isEdit}
                  />

                  <Spacer width={25} />

                  <SelectGenderProfile
                    typeSelected={value}
                    value={"Outro"}
                    type="Outro"
                    onPress={onChange}
                    disabled={!isEdit}
                  />
                </S.ContainerGender>
              )}
              name="gender"
            />
          </>
        )}
      </S.ScrollView>

      {isEdit && !keyboardStatus && data && (
        <S.ContainerButton>
          <Button
            title="Atualizar"
            onPress={handleSubmit(onSubmit)}
            isLoad={isPending}
          />
          <Spacer height={15} />
          <Button
            title="Cancelar"
            type="secondary"
            backgroundColor="white"
            color="black"
            onPress={handleCancelEdit}
          />
          <Spacer height={20} />
        </S.ContainerButton>
      )}
    </S.Container>
  );
}
