import React, { ForwardRefRenderFunction, useRef } from "react";

import { forwardRef } from "react";
import { useImperativeHandle } from "react";

import { Modalize } from "react-native-modalize";
import Text from "../Text";
import { Container, Content } from "./styles";

import { Button } from "../Button";
import { Spacer } from "../Spacer";
import { scale } from "react-native-size-matters";
import { SvgDelete } from "@assets/icons";
import { ColorType } from "@theme/theme/typesTheme";

type TypeIconDelete = "delete";

const iconsModalInfo = {
  delete: (
    <SvgDelete width={scale(44.33)} height={scale(57)} fill={"#E53017"} />
  ),
};

export type ModalInfoHandler = Modalize;

type Props = {
  title: string;
  icon: TypeIconDelete;
  description?: string;
  textButton: string;
  textButtonSecondary?: string;
  colorButton?: ColorType;
  colorButtonSecondary?: ColorType;
  onPress: () => void;
  onPressSecondary?: () => void;
  isLoad?: boolean;
  isSuccess?: boolean;
};

const ModalInfo: ForwardRefRenderFunction<ModalInfoHandler, Props> = (
  {
    title,
    icon,
    description,
    textButton,
    textButtonSecondary,
    colorButton = "red",
    colorButtonSecondary = "primary",
    onPress,
    onPressSecondary,
    isLoad = false,
    isSuccess = false,
  },
  ref
) => {
  const modalizeRef = useRef<Modalize>(null);

  useImperativeHandle(ref, () => modalizeRef.current as ModalInfoHandler, []);

  return (
    <Modalize
      ref={modalizeRef}
      adjustToContentHeight
      withHandle={isSuccess ? !isSuccess : !isLoad}
      panGestureEnabled={isSuccess ? !isSuccess : !isLoad}
      closeOnOverlayTap={isSuccess ? !isSuccess : !isLoad}
    >
      <Container>
        <Content>
          {iconsModalInfo[icon]}
          <Spacer height={19.5} />

          <Text variant="Poppins_700Bold" fontSize={16} textAlign="center">
            {title}
          </Text>

          {description ? (
            <>
              <Spacer height={15} />

              <Text
                variant="Poppins_400Regular"
                fontSize={16}
                textAlign="center"
              >
                {description}
              </Text>
            </>
          ) : null}
        </Content>
        <Spacer height={22} />
        <Button
          title={textButton}
          backgroundColor={colorButton}
          color="white"
          onPress={onPress}
          isLoad={isLoad}
        />
        {onPressSecondary ? (
          <>
            <Spacer height={22} />
            <Button
              title={textButtonSecondary}
              backgroundColor={colorButtonSecondary}
              color="white"
              onPress={onPressSecondary}
            />
          </>
        ) : null}
      </Container>
    </Modalize>
  );
};

export default forwardRef(ModalInfo);
