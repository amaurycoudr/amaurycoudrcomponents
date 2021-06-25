import theme from "../src/theme/theme";
import { ThemeProvider } from "styled-components";
import "../src/fonts/stylesheet.css";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme(false)}>
        <Story />
      </ThemeProvider>
    );
  },
];
