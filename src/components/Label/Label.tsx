import React, { FC, useContext, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { lightShadow } from "../../helpers/shadow";
import { iconPosition } from "../../helpers/types";
import Box from "../Box";
import { BoxProps } from "../Box/Box";
import BoxButton from "../BoxButton";
import Icon from "../Icon";
import { iconVariant } from "../Icon/iconVariant";
import Typo from "../Typo";
type IIconElement = {} | { iconPosition: "noIcon"; iconVariant: null };

export interface LabelProps {
  colorType: "error" | "valid" | "warning" | "info" | "default";
  iconPosition: iconPosition | "noIcon";
  text?: string;
  fillingType?: "border" | "bg";
  iconVariant?: iconVariant;
  onClick?: (() => void) | null;
}
const Label: FC<LabelProps> = ({
  colorType,
  text,
  onClick,
  iconVariant,
  iconPosition,
  fillingType = "bg",
}) => {
  const fontColor = colorType === "default" ? "font.medium" : colorType;
  const fillingColor =
    colorType === "default" ? "bg.medium" : colorType + "Light";

  const {
    colors: {
      error,
      errorLight,
      warning,
      warningLight,
      valid,
      validLight,
      info,
      infoLight,
      font: { medium: fontMedium },
      bg: { medium: bgMedium },
    },
  } = useContext(ThemeContext);

  const isOnlyIcon = iconPosition !== "noIcon" && iconPosition === "onlyIcon";
  const isIconLeft = iconPosition !== "noIcon" && iconPosition === "iconLeft";
  const isIconRight = iconPosition !== "noIcon" && iconPosition === "iconRight";

  const iconColors = [
    { label: "error", color: error },
    { label: "valid", color: valid },
    { label: "warning", color: warning },
    { label: "info", color: info },
    { label: "default", color: fontMedium },
  ];
  const shadowColors = [
    { label: "error", color: errorLight },
    { label: "valid", color: validLight },
    { label: "warning", color: warningLight },
    { label: "info", color: infoLight },
    { label: "default", color: bgMedium },
  ];
  const iconColor = iconColors.find((el) => el.label === colorType)!.color;

  const LabelIcon = () => (
    <Icon size={16} color={iconColor} variant={iconVariant!} />
  );

  return (
    <LabelContainer
      onClick={onClick}
      border={fillingType === "border" ? "1px solid" : "0"}
      borderColor={fontColor}
      bg={fillingType === "bg" ? fillingColor : ""}
      shadow={iconColor}
      borderRadius="xs"
      px="s"
      py="xs"
    >
      {isIconLeft && (
        <Box mr="xs">
          <LabelIcon />
        </Box>
      )}
      {isOnlyIcon ? (
        <LabelIcon />
      ) : (
        <Typo color={fontColor} variant="label">
          {text}
        </Typo>
      )}
      {isIconRight && (
        <Box ml="xs">
          <LabelIcon />
        </Box>
      )}
    </LabelContainer>
  );
};

const ShadowButton = styled(BoxButton)<{ shadow: string }>`
  transition: all 0.5s;
  &:hover {
    box-shadow: ${({ shadow }) => lightShadow(shadow)};
  }
`;

const LabelContainer: FC<
  BoxProps & { onClick: (() => void) | undefined | null; shadow: string }
> = ({ children, onClick, shadow, ...props }) => {
  console.log(onClick);

  return onClick ? (
    <ShadowButton shadow={shadow} onClick={onClick} {...props}>
      {children}
    </ShadowButton>
  ) : (
    <Box {...props}>{children}</Box>
  );
};

export default Label;
