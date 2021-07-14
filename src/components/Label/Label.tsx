import React, { FC, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { emptyShadowLight, shadowLight } from "../../helpers/shadow";
import Box from "../Box";
import { BoxProps } from "../Box/Box";
import BoxButton from "../BoxButton";
import Icon from "../Icon";
import { iconPosition } from "../Icon/helper";
import { iconVariant } from "../Icon/iconVariant";
import { Bold } from "../Typo";

export interface LabelProps {
  /**
   * Color of the label
   */
  colorType: "error" | "valid" | "warning" | "info" | "default";
  /**
   * Define the icon position. Display noIcon if iconPosition="noIcon"
   */
  iconPosition: iconPosition | "noIcon";
  /**
   * The text of the label
   */
  text?: string;
  /**
   * This props define if the label has its bg or its border colored. border work well only for "default"
   */
  fillingType?: "border" | "bg";
  /**
   * The variant of the icon Display. If iconPosition!="noIcon" this props must be define
   */
  iconVariant?: iconVariant;
  /**
   * The label can be clickable. So it accepts a props onClick
   */
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
      warning,
      valid,
      info,
      font: { medium: fontMedium },
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
      {isOnlyIcon ? <LabelIcon /> : <Bold color={fontColor}>{text}</Bold>}
      {isIconRight && (
        <Box ml="xs">
          <LabelIcon />
        </Box>
      )}
    </LabelContainer>
  );
};

const ShadowButton = styled(BoxButton)<{ shadow: string }>`
  transition: all 0.3s;
  &:hover {
    box-shadow: ${({ shadow }) => shadowLight(shadow)};
  }
  &:active {
    box-shadow: ${({ shadow }) => emptyShadowLight(shadow)};
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

export default React.memo(Label);
