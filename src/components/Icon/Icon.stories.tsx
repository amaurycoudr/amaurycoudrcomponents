import React from "react";
import { Story, Meta } from "@storybook/react";
import Icon, { IconProps } from "./Icon";

export default {
  title: "Icon",
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: "#ED8C87",
  variant: "account_box",
};
