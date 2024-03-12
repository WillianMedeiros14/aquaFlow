import { useState } from "react";

import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

import Text from "@global/components/Text";
import * as S from "./styles";
import { Spacer } from "@global/components/Spacer";
import theme from "@theme/theme/theme";

interface ISelectTimeProps {
  time: Date;
  type?: "AM" | "PM";
  onSelect: (value: Date) => void;
  textError?: string;
}

export function SelectTime({
  time,
  type = "AM",
  onSelect,
  textError,
}: ISelectTimeProps) {
  const [date, setDate] = useState(new Date(1598051730000));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    onSelect(currentDate);
  };

  const showMode = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: "time",
      is24Hour: true,
    });
  };

  return (
    <>
      <S.Container>
        <S.ButtonSelectTime onPress={showMode}>
          <Text
            variant="Poppins_400Regular"
            fontSize={21}
            style={{
              color: time ? theme.colors.black : "rgba(0,0,0, 0.1)",
            }}
          >
            {time
              ? time.toLocaleTimeString("pt-BR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "00:00"}
          </Text>
        </S.ButtonSelectTime>

        <Spacer width={7} />

        <S.ContainerTypeTime>
          <S.ContentContainerType isActive={type === "AM" && true}>
            <Text
              variant={
                type === "AM" ? "Poppins_600SemiBold" : "Poppins_400Regular"
              }
              fontSize={15}
              color="black"
            >
              AM
            </Text>
          </S.ContentContainerType>

          <S.ContentContainerType isActive={type === "PM" && true}>
            <Text
              variant={
                type === "PM" ? "Poppins_600SemiBold" : "Poppins_400Regular"
              }
              fontSize={15}
              color="black"
            >
              PM
            </Text>
          </S.ContentContainerType>
        </S.ContainerTypeTime>
      </S.Container>

      {!!textError ? (
        <Text variant="Inter_400Regular" fontSize={12} color="red">
          {textError}
        </Text>
      ) : null}
    </>
  );
}
