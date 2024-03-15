import * as S from "./styles";
import { HeaderHomeScreen } from "@features/home/components/HeaderHomeScreen";
import { ActivityIndicator, Dimensions, StatusBar, View } from "react-native";
import { BackGroundAddConsumptionHomeSvg } from "@assets/vector";
import { scale } from "react-native-size-matters";
import { Spacer } from "@global/components/Spacer";
import Text from "@global/components/Text";
import AnimatedSVG from "@features/home/components/AnimatedSVG";
import { Button } from "@global/components/Button";
import { useGetUserDetails } from "@features/profile/hooks/useGetUserDetails";
import { useAuth } from "@global/context/useAuth";
import { useGetUserDetailsWaterByDate } from "@features/home/hooks/useGetUserDetailsWaterByDate";
import { Load } from "@global/components/Load";
import { calculateNextHourWater } from "@global/utils/calculatingDailyGoals";
import { useAddingWaterConsumption } from "@features/home/hooks/useAddingWaterConsumption";
import { IAddingWaterConsumptionServiceServiceProps } from "@features/home/services/addingWaterConsumption.service";
import theme from "@theme/theme/theme";

const { width } = Dimensions.get("window");

export function HomeScreen() {
  const user = useAuth((state) => state.user);

  const { data, isLoading, refetch } = useGetUserDetails({
    userId: user?.uid,
  });

  const { data: dataWater, isLoading: isLoadingWater } =
    useGetUserDetailsWaterByDate({
      date: new Date().toISOString().split("T")[0],
      userId: user?.uid,
    });

  const { mutate, isPending } = useAddingWaterConsumption();

  function onAddConsumption() {
    if (dataWater) {
      const nextTimeToDrinkWater = calculateNextHourWater(
        dataWater?.nextTimeToDrinkWater as string
      );

      const amountOfWaterConsumed =
        dataWater?.waterDistributionOnTheDay + dataWater?.amountOfWaterConsumed;

      const dataSend: IAddingWaterConsumptionServiceServiceProps = {
        id: dataWater.id,
        data: {
          amountOfWaterConsumed: parseFloat(amountOfWaterConsumed.toFixed(2)),
          nextTimeToDrinkWater,
        },
      };

      mutate(dataSend);
    }
  }

  return (
    <S.Container>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#f4f8fb"} />
      <S.ContainerHeader>
        <HeaderHomeScreen />
      </S.ContainerHeader>

      <S.ScrollView>
        <Spacer height={60} />

        {isLoadingWater ? (
          <Load />
        ) : (
          <>
            <S.ContainerAddConsumption>
              <BackGroundAddConsumptionHomeSvg
                width={width - 32}
                height={scale(160)}
              />

              <S.ContentAddConsumption>
                <S.ContainerConsumptionText>
                  <Text
                    variant="Poppins_600SemiBold"
                    fontSize={20}
                    color="grayText"
                  >
                    {dataWater?.nextTimeToDrinkWater}
                  </Text>

                  <Text
                    variant="Poppins_500Medium"
                    fontSize={14}
                    color="grayQuaternary"
                    style={{
                      marginTop: -5,
                      alignContent: "center",
                      justifyContent: "center",
                    }}
                  >
                    {dataWater?.waterDistributionOnTheDay}ml de água
                  </Text>
                </S.ContainerConsumptionText>

                <S.ButtonAddConsumption onPress={onAddConsumption}>
                  <Text variant="Poppins_500Medium" fontSize={10} color="black">
                    Adicionar consumo
                  </Text>
                  {isPending && (
                    <View
                      style={{
                        marginLeft: 10,
                      }}
                    >
                      <ActivityIndicator color={theme.colors.primary} />
                    </View>
                  )}
                </S.ButtonAddConsumption>
              </S.ContentAddConsumption>
            </S.ContainerAddConsumption>

            <Spacer height={54} />

            <S.ContainerDailyGoal>
              <AnimatedSVG
                amountOfWaterConsumed={dataWater?.amountOfWaterConsumed}
              />

              <S.DailyGoal>
                <Text
                  variant="Poppins_500Medium"
                  fontSize={12}
                  color="grayQuaternary"
                >
                  Meta diária
                </Text>
                <Spacer height={7} />
                <Text
                  variant="Poppins_600SemiBold"
                  fontSize={16}
                  color="grayText"
                >
                  {dataWater?.dailyAmountOfWater}ml
                </Text>
              </S.DailyGoal>

              <Spacer height={30} />

              <Button title="Ir para a dashboard" height={48} />

              <Text
                variant="Poppins_500Medium"
                fontSize={12}
                color="grayQuaternary"
                textAlign="center"
                style={{
                  paddingLeft: scale(30),
                  paddingRight: scale(30),
                  marginTop: scale(9),
                }}
              >
                {`Você conseguiu ${
                  dataWater?.amountOfWaterConsumed
                    ? (
                        (dataWater?.amountOfWaterConsumed /
                          dataWater.dailyAmountOfWater) *
                        100
                      ).toFixed(2)
                    : 0
                }% da meta de hoje, mantenha o foco na sua saúde!`}
              </Text>
            </S.ContainerDailyGoal>

            <Spacer height={20} />
          </>
        )}
      </S.ScrollView>
    </S.Container>
  );
}
