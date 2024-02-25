import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";

import { Container, Content } from "./styles";

import { RectButtonProps } from "react-native-gesture-handler";

import { scale } from "react-native-size-matters";

import { ColorType, TypographyStylesType } from "@theme/theme/typesTheme";
import { Spacer } from "@global/components/Spacer";
import Text from "@global/components/Text";

type IconsButtonType = "moreWhite";

interface Props extends RectButtonProps {
  title: string;
  height?: number;
  isLoad?: boolean;
  fontSize?: number;
  color?: ColorType;
  backgroundColor?: ColorType;
  fontVariant?: TypographyStylesType;
  icon?: IconsButtonType;
}

export function Button({
  title,
  height = 60,
  isLoad,
  fontSize = 14,
  color = "white",
  backgroundColor = "primary",
  fontVariant = "Poppins_700Bold",
  style,
  icon,
  ...rest
}: Props) {
  const theme = useTheme();
  return (
    <Container height={height} backgroundColor={backgroundColor} style={style}>
      <Content {...rest}>
        {isLoad ? (
          <ActivityIndicator color={theme.colors.white} />
        ) : (
          <>
            <Text variant={fontVariant} fontSize={fontSize} color={color}>
              {title}
            </Text>
          </>
        )}
      </Content>
    </Container>
  );
}
