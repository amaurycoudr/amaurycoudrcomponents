import React from "react";
import { Story, Meta } from "@storybook/react";
import Icon, { IconProps } from "./Icon";

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
  color: "red",
  variant: "account_box",
};
