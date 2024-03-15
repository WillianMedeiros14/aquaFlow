import React from "react";

import * as S from "./styles";
import { Header } from "@global/components/Header";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Spacer } from "@global/components/Spacer";
import Text from "@global/components/Text";
import { SelectTypeGenderSelectProfile } from "@features/completeProfile/components/SelectTypeGenderSelectProfile";
import { TextInput } from "@global/components/TextInput";
import { Button } from "@global/components/Button";
import { useCompleteProfile } from "@features/completeProfile/hooks/useCompleProfile";
import { Controller } from "react-hook-form";
import { ICompleteProfile } from "@features/completeProfile/types/completeProfile";
import { SelectTime } from "@features/completeProfile/components/SelectTime";
import { checkAMorPM } from "@features/completeProfile/utils/checkAMorPM";
import { ICompleteProfileServiceProps } from "@features/completeProfile/services/completeProfie.service";
import { useAuth } from "@global/context/useAuth";
import {
  calculateTheNextTimeToDrinkWater,
  calculateWaterDistribution,
  dailyAmountOfWater,
  rangeOfWakingHours,
} from "@global/utils/calculatingDailyGoals";

export default function CompleteProfileHome() {
  const navigation = useNavigation();
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const user = useAuth((state) => state.user);

  const { control, handleSubmit, errors, isPending, mutate } =
    useCompleteProfile();

  const onSubmit = async (dataForm: ICompleteProfile) => {
    const resultDailyAmountOfWater = dailyAmountOfWater({
      weight: dataForm.weight.trim(),
    });

    const valueRangeOfWakingHours = rangeOfWakingHours({
      sleepTime: dataForm.timeToSleep,
      wakeTime: dataForm.timeToWakeUp,
    });

    const resultWaterDistributionOnTheDay = calculateWaterDistribution({
      dailyAmountOfWater: resultDailyAmountOfWater,
      awakeHours: valueRangeOfWakingHours,
    });

    const resultNextTimeToDrinkWater = calculateTheNextTimeToDrinkWater(
      dataForm.timeToWakeUp
    );

    const currentDate = new Date();

    const dataSend: ICompleteProfileServiceProps = {
      userId: user.uid,
      dataUser: {
        age: dataForm.age,
        gender: dataForm.gender.trim(),
        height: dataForm.height.trim(),
        timeToSleep: dataForm.timeToSleep,
        timeToWakeUp: dataForm.timeToWakeUp,
        weight: dataForm.weight.trim(),

        rangeOfWakingHours: valueRangeOfWakingHours,
      },
      dataHistoric: {
        dailyAmountOfWater: resultDailyAmountOfWater,
        waterDistributionOnTheDay: resultWaterDistributionOnTheDay,
        amountOfWaterConsumed: 0,
        date: currentDate.toISOString().split("T")[0],
        userId: user.uid,
        nextTimeToDrinkWater: resultNextTimeToDrinkWater,
      },
    };

    mutate(dataSend);
  };

  return (
    <S.Container>
      <StatusBar
        translucent
        barStyle={"dark-content"}
        backgroundColor={theme.colors.white}
      />

      <Spacer height={insets.top + 10} />

      <Header title="Completar perfil" />

      <S.Scroll>
        <Spacer height={26} />
        <Text variant="Poppins_500Medium" fontSize={16} color="black">
          Qual é o seu gênero?
        </Text>

        <Spacer height={9} />
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              <S.ContainerGender>
                <SelectTypeGenderSelectProfile
                  typeIcon="male"
                  type="Masc."
                  typeSelect={value}
                  onPress={onChange}
                />
                <SelectTypeGenderSelectProfile
                  typeIcon="female"
                  type="Fem."
                  typeSelect={value}
                  onPress={onChange}
                />
                <SelectTypeGenderSelectProfile
                  typeIcon="all"
                  type="Outro"
                  typeSelect={value}
                  onPress={onChange}
                />
              </S.ContainerGender>
              {!!errors.gender?.message ? (
                <Text variant="Inter_400Regular" fontSize={12} color="red">
                  {errors.gender?.message}
                </Text>
              ) : null}
            </>
          )}
          name="gender"
        />

        <Spacer height={16} />

        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              isActiveTitle
              title="Quantos anos você tem?"
              placeholder="Digite sua idade"
              keyboardType="number-pad"
              value={value?.toString()}
              onChangeText={(text: string) => {
                if (text) {
                  const textParse = text.trim();
                  onChange(textParse);
                } else {
                  onChange(undefined);
                }
              }}
              textError={errors.age?.message}
            />
          )}
          name="age"
        />

        <Spacer height={16} />

        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              isActiveTitle
              title="Qual é o seu peso em kg?"
              placeholder="Digite seu peso"
              keyboardType="number-pad"
              value={value}
              onChangeText={(text: string) => {
                const textParse = text.trim();

                onChange(textParse);
              }}
              textError={errors.weight?.message}
            />
          )}
          name="weight"
        />

        <Spacer height={16} />

        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              isActiveTitle
              title="Qual é a sua altura em cm?"
              placeholder="Digite sua altura"
              keyboardType="number-pad"
              value={value}
              onChangeText={(text: string) => {
                const textParse = text.trim();

                onChange(textParse);
              }}
              textError={errors.height?.message}
            />
          )}
          name="height"
        />

        <Spacer height={16} />

        <Text variant="Poppins_500Medium" fontSize={16} color="black">
          Hora de acordar
        </Text>

        <Spacer height={4} />

        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <SelectTime
              type={checkAMorPM(value)}
              time={value}
              onSelect={onChange}
              textError={errors.timeToWakeUp?.message}
            />
          )}
          name="timeToWakeUp"
        />
        <Spacer height={16} />

        <Text variant="Poppins_500Medium" fontSize={16} color="black">
          Hora de dormir
        </Text>

        <Spacer height={4} />
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <SelectTime
              type={checkAMorPM(value)}
              time={value}
              onSelect={onChange}
              textError={errors.timeToSleep?.message}
            />
          )}
          name="timeToSleep"
        />
        <Spacer height={30} />

        <Button
          height={48}
          fontVariant="Poppins_600SemiBold"
          title={"Salvar"}
          onPress={handleSubmit(onSubmit)}
          isLoad={isPending}
        />

        <Spacer height={10} />
      </S.Scroll>
    </S.Container>
  );
}
