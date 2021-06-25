import React from "react";
import { Story, Meta } from "@storybook/react";
import Icon, { IconProps } from "./Icon";
import theme from "../../theme/theme";

export default {
  title: "Icon",
  component: Icon,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: "#ED8C87",
  variant: "account_box",
};
