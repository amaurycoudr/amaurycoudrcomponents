import React, { FC, useContext } from "react";
import { ThemeContext } from "styled-components";
import Box from "../Box";
import Icon from "../Icon";
import { iconVariant } from "../Icon/iconVariant";
import { P } from "../Typo";
export interface MessageInfoProps {
  colorType: "error" | "valid" | "warning" | "info" | "default";
  iconVariant: iconVariant;
}
const MessageInfo: FC<MessageInfoProps> = ({
  colorType,
  children,
  iconVariant,
}) => {
  const fontColor = colorType === "default" ? "font.medium" : colorType;
  const fillingColor =
    colorType === "default" ? "bg.medium" : colorType + "Light";

  const {
    colors: {
      error,
      warning,
      valid,
      info,
      font: { medium: fontMedium },
    },
  } = useContext(ThemeContext);

  const iconColors = [
    { label: "error", color: error },
    { label: "valid", color: valid },
    { label: "warning", color: warning },
    { label: "info", color: info },
    { label: "default", color: fontMedium },
  ];

  const iconColor = iconColors.find((el) => el.label === colorType)!.color;

  const LabelIcon = () => (
    <Icon size={24} color={iconColor} variant={iconVariant} />
  );

  return (
    <Box alignItems="center" flex={1} bg={fillingColor} p="xl" borderRadius="m">
      <Box mr="l">
        <LabelIcon />
      </Box>

      <P textAlign="justify" color={fontColor}>
        {children}
      </P>
    </Box>
  );
};

export default MessageInfo;
