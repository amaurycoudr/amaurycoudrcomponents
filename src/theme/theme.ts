import { DefaultTheme } from "styled-components";
import darkColors from "./darkColor";
import darkShadow from "./darkShadow";
import lightColors from "./lightColors";
import lightShadow from "./lightShadow";
import radii from "./radii";
import sizes from "./sizes";
import space from "./space";

const theme = (isDark: boolean): DefaultTheme => ({
  colors: isDark ? darkColors : lightColors,
  radii,
  shadow: isDark ? darkShadow : lightShadow,
  space,
  sizes,
});

export default theme;
