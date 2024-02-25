import React from "react";
import {
  ButtonOption,
  Container,
  ContainerButtonOption,
  ContainerLogo,
  KeyboardAvoidingView,
  Line,
  ScrollView,
} from "./styles";
import { Dimensions, Platform } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import Text from "@global/components/Text";
import { Spacer } from "@global/components/Spacer";
import { Header } from "@global/components/Header";
import { Button } from "@global/components/Button";

const { height } = Dimensions.get("window");

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
  isHeader?: boolean;
  onPress: () => void;
  titleButton: string;
  isLoad: boolean;

  componentBottom?: React.ReactNode;
  titleHeader?: string;
}

export default function LayoutSignInAndSignUp({
  title,
  description,

  isHeader = true,
  children,
  onPress,
  titleButton,
  isLoad,
  componentBottom,
  titleHeader,
}: Props) {
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Container>
        <ScrollView>
          <Spacer height={insets.top + 6} />

          {isHeader && (
            <>
              <Header title={titleHeader} onPressLeft={() => {}} />
              <Spacer height={50} />
            </>
          )}

          <Text variant="Poppins_700Bold" fontSize={22} color="title">
            {title}
          </Text>

          <Text variant="Inter_400Regular" fontSize={14} color="graySecondary">
            {description}
          </Text>

          <Spacer height={45} />

          {children}

          <Spacer height={30} />

          <Button
            height={48}
            fontVariant="Poppins_600SemiBold"
            title={titleButton}
            onPress={onPress}
            isLoad={isLoad}
          />

          {componentBottom}

          {/* <Spacer height={77} /> */}

          {/* <ContainerButtonOption
          style={{
            height: 140,
          }}
        >
          <ButtonOption onPress={() => onPressScreenNavigate()}>
            <Text variant="InterRegular" color="title" fontSize={15}>
              {textOption.left}
            </Text>
            <Spacer width={4} />
            <Text variant="InterBold" color="title" fontSize={15}>
              {textOption.right}
            </Text>
          </ButtonOption>
        </ContainerButtonOption>

        <Spacer height={15} /> */}
        </ScrollView>
      </Container>
    </KeyboardAvoidingView>
  );
}
