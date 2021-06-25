import "styled-components";
import lightColors from "./theme/lightColors";
import fonts from "./theme/fonts";
import fontWeights from "./theme/fontWeights";
import radii from "./theme/radii";
import lightShadow from "./theme/lightShadow";
import space from "./theme/space";
import sizes from "./theme/sizes";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof lightColors;
    fonts: typeof fonts;
    fontWeights: typeof fontWeights;
    radii: typeof radii;
    shadow: typeof lightShadow;
    space: typeof space;
    sizes: typeof sizes;
  }
}
