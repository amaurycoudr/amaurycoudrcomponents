module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  backgrounds: {
    values: [
      { name: "light", value: "#FAFAFA" },
      { name: "medium", value: "#F3F1F1" },
      { name: "dark", value: "#E7E4E4" },
    ],
  },
};
