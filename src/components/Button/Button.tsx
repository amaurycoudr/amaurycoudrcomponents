import React, { FC, useContext, useState } from "react";
import styled, {
  DefaultTheme,
  StyledComponent,
  ThemeContext,
} from "styled-components";
import { primaryGradient } from "../../helpers/gradiant";
import { emptyShadowMedium, shadowMedium } from "../../helpers/shadow";
import { Color } from "../../theme/lightColors";
import theme from "../../theme/theme";
import Box from "../Box";
import BoxButton from "../BoxButton";
import Icon from "../Icon";
import { iconPosition } from "../Icon/helper";
import { iconVariant } from "../Icon/iconVariant";
import { Bold, H2, H3 } from "../Typo";
import { buttonSize, buttonStatus } from "./helper";
import ReactLoading from "react-loading";

export interface ButtonProps {
  /**
   *  status of the button initial value : default
   */
  status?: buttonStatus;
  /**
   * the text of the button
   */
  text: string;

  iconPosition?: iconPosition | "noIcon";
  iconVariant?: iconVariant;
  onClick: () => void;
  buttonSize?: buttonSize;
  buttonFilling?: "bg" | "border";
  bgBorderButton?: Color;
}

interface ISizeButtonProps {
  py: string;
  px: string;
  borderRadius: string;
}

const largeButtonProps: ISizeButtonProps = {
  py: "m",
  px: "xxl",
  borderRadius: "m",
};

const smallButtonProps: ISizeButtonProps = {
  py: "xs",
  px: "l",
  borderRadius: "xs",
};
const normalButtonProps: ISizeButtonProps = {
  py: "s",
  px: "xl",
  borderRadius: "s",
};

const largeOnlyIconButtonProps: ISizeButtonProps = {
  py: "m",
  px: "m",
  borderRadius: "100%",
};

const smallOnlyIconButtonProps: ISizeButtonProps = {
  py: "xs",
  px: "xs",
  borderRadius: "100%",
};
const normalOnlyIconButtonProps: ISizeButtonProps = {
  py: "s",
  px: "s",
  borderRadius: "100%",
};

const sizes: {
  label: buttonSize;
  size: ISizeButtonProps;
  sizeOnlyIcon: ISizeButtonProps;
  typo: StyledComponent<any, DefaultTheme>;
}[] = [
  {
    size: largeButtonProps,
    sizeOnlyIcon: largeOnlyIconButtonProps,
    label: "large",
    typo: H2,
  },
  {
    size: smallButtonProps,
    sizeOnlyIcon: smallOnlyIconButtonProps,
    label: "small",
    typo: Bold,
  },
  {
    size: normalButtonProps,
    sizeOnlyIcon: normalOnlyIconButtonProps,
    label: "normal",
    typo: H3,
  },
];

interface ISizeIconButtonProps {
  sizeIcon: number;
  mIcon: string;
  widthLoader: number;
}

const largeIconButtonProps: ISizeIconButtonProps = {
  mIcon: "l",
  sizeIcon: 24,
  widthLoader: 28,
};
const smallIconButtonProps: ISizeIconButtonProps = {
  mIcon: "s",
  sizeIcon: 16,
  widthLoader: 16,
};
const normalIconButtonProps: ISizeIconButtonProps = {
  mIcon: "m",
  sizeIcon: 20,
  widthLoader: 32,
};

const iconSizes: {
  label: buttonSize;
  size: ISizeIconButtonProps;
}[] = [
  { size: largeIconButtonProps, label: "large" },
  { size: smallIconButtonProps, label: "small" },
  { size: normalIconButtonProps, label: "normal" },
];
/**
 *
 * @returns default components for user interaction
 */
const Button: FC<ButtonProps> = ({
  buttonSize = "normal",
  text,
  status = "default",
  bgBorderButton,
  iconVariant,
  buttonFilling = "bg",
  iconPosition = "noIcon",
}) => {
  const isOnlyIcon = iconPosition !== "noIcon" && iconPosition === "onlyIcon";
  const isIconLeft = iconPosition !== "noIcon" && iconPosition === "iconLeft";
  const isIconRight = iconPosition !== "noIcon" && iconPosition === "iconRight";

  const themeContext = useContext(ThemeContext);

  const { size, sizeOnlyIcon, typo: TypoButton } = sizes.find(
    (sizeButton) => sizeButton.label === buttonSize
  )!;
  const {
    size: { mIcon, sizeIcon, widthLoader },
  } = iconSizes.find((sizeButton) => sizeButton.label === buttonSize)!;
  const [xPosition, setXPosition] = useState<number | undefined>(undefined);

  const isDisabled = status === "loading" || status === "disabled";

  const colors =
    buttonFilling === "bg"
      ? {
          color: "white",
          bgColor: primaryGradient(xPosition),
          borderColor: "primary",

          disabledBgColor: themeContext.colors.primaryVariant[1],
          disabledBorderColor: themeContext.colors.primaryVariant[1],
        }
      : {
          color: themeContext.colors.primary,
          bgColor: bgBorderButton || "white",
          borderColor: "primary",

          disabledBgColor: bgBorderButton || "white",
          disabledBorderColor: themeContext.colors.primaryVariant[2],
        };

  const ButtonIcon = () => (
    <Icon size={sizeIcon} color={colors.color} variant={iconVariant!} />
  );

  console.log(colors.disabledBgColor);

  return (
    <StyledButton
      shadow={theme(false).colors.primary}
      onMouseMove={(e) => {
        setXPosition(
          ((e.pageX - e.currentTarget.getBoundingClientRect().left) * 100) /
            e.currentTarget.offsetWidth
        );
      }}
      disabled={isDisabled}
      onMouseLeave={() => setXPosition(undefined)}
      border="1px solid"
      borderColor={isDisabled ? colors.disabledBorderColor : colors.borderColor}
      background={isDisabled ? colors.disabledBgColor : colors.bgColor}
      {...(isOnlyIcon ? sizeOnlyIcon : size)}
    >
      <Content isLoading={status !== "loading"}>
        {isIconLeft && (
          <Box mr={mIcon}>
            <ButtonIcon />
          </Box>
        )}
        {isOnlyIcon ? (
          <ButtonIcon />
        ) : (
          <TypoButton color={colors.color}>{text}</TypoButton>
        )}
        {isIconRight && (
          <Box ml={mIcon}>
            <ButtonIcon />
          </Box>
        )}
      </Content>
      {status === "loading" && (
        <Box
          position="absolute"
          alignItems="center"
          justifyContent="center"
          left="0"
          right="0"
          top="0"
          bottom="0"
        >
          <ReactLoading
            type={"bubbles"}
            color={colors.color}
            height={widthLoader}
            width={widthLoader}
          />
        </Box>
      )}
    </StyledButton>
  );
};
const StyledButton = styled(BoxButton)<{ shadow: string }>`
  transition: all 0.3s;
  position: relative;
  &:hover {
    box-shadow: ${({ shadow }) => shadowMedium(shadow)};
  }
  &:active {
    box-shadow: ${({ shadow }) => emptyShadowMedium(shadow)};
  }
  &:disabled {
    box-shadow: ${({ shadow }) => emptyShadowMedium(shadow)};
  }
`;
const Content = styled(Box)<{ isLoading: boolean }>`
  opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
`;
export default React.memo(Button);
