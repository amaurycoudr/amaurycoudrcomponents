import theme from "../src/theme/theme";
import { ThemeProvider } from "styled-components";
import "../src/fonts/stylesheet.css";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    values: [
      { name: "white", value: "white" },
      { name: "light", value: theme(false).colors.bg.light },
      { name: "medium", value: theme(false).colors.bg.medium },
      { name: "dark", value: theme(false).colors.bg.dark },
    ],
  },
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
