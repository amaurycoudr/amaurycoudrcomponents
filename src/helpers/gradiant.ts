import { useContext } from "react";
import { ThemeContext } from "styled-components";

export const primaryGradient = (xPercent?: number | undefined) => {
  const themeContext = useContext(ThemeContext);
  return `linear-gradient(90deg, ${themeContext.colors.primary} 0%, ${
    themeContext.colors.primary
  } ${xPercent || 39}%, ${themeContext.colors.primaryVariant[1]} 100%)`;
};
