import React, { useState } from "react";

import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";

import { Spacer } from "../Spacer";
import Text from "../Text";

import { ButtonEye, Container, RNTextInput } from "./styles";
import {
  EyeSvg,
  NoEyeSvg,
  EmailSvg,
  LockSvg,
  UserOutlineSvg,
} from "@assets/icons";
import { scale } from "react-native-size-matters";

const iconsInput = {
  email: <EmailSvg width={scale(24)} height={scale(24)} />,
  lock: <LockSvg width={scale(24)} height={scale(24)} />,
  user: <UserOutlineSvg width={scale(24)} height={scale(24)} />,
};

export type IconInputType = keyof typeof iconsInput;

interface Props extends TextInputProps {
  title: string;
  isPassword?: boolean;
  textError?: string;
  isActiveTitle?: boolean;
  icon?: IconInputType;
  onChangeText: (value: string) => void;
  isActiveOnPress?: boolean;
  onPress?: () => void;
}

export function TextInput({
  title,
  isPassword,
  textError,
  isActiveTitle = false,
  value,
  onChangeText,
  multiline,
  isActiveOnPress = false,
  onPress,
  icon,
  editable,
  ...rest
}: Props) {
  const theme = useTheme();
  const [isToSee, setIsToSee] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <>
      {isActiveTitle ? (
        <>
          <Text variant="Inter_400Regular" fontSize={16} color="black">
            {title}
          </Text>
          <Spacer height={4} />
        </>
      ) : null}
      <Container
        multiline={multiline}
        disabled={!isActiveOnPress}
        isEdit={editable}
        isFocus={isFocus}
        onPress={onPress}
      >
        {icon && iconsInput[icon]}

        <RNTextInput
          placeholder={!isActiveTitle ? title : ""}
          placeholderTextColor={theme.colors.grayTertiary}
          secureTextEntry={isPassword ? !isToSee : isPassword}
          value={value}
          multiline={multiline}
          editable={editable}
          onChangeText={onChangeText}
          onFocus={() => {
            setIsFocus(true);
          }}
          onBlur={() => {
            setIsFocus(false);
          }}
          {...rest}
        />

        {isPassword ? (
          <ButtonEye onPress={() => setIsToSee((oldState) => !oldState)}>
            {isToSee ? <EyeSvg /> : <NoEyeSvg />}
          </ButtonEye>
        ) : null}
      </Container>

      {!!textError ? (
        <Text variant="Inter_400Regular" fontSize={12} color="red">
          {textError}
        </Text>
      ) : null}
    </>
  );
}
