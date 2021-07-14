import React from "react";
import { Story, Meta } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Button",
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ margin: "1em", display: "flex" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonSize: "normal",
  text: "Action",
};
export const DefaultLarge = Template.bind({});
DefaultLarge.args = {
  buttonSize: "large",
  text: "Action",
};
export const DefaultSmall = Template.bind({});
DefaultSmall.args = {
  buttonSize: "small",
  text: "Action",
};

export const DefaultLoading = Template.bind({});
DefaultLoading.args = {
  status: "loading",
  buttonSize: "normal",
  text: "Action",
};
export const DefaultLargeLoading = Template.bind({});
DefaultLargeLoading.args = {
  status: "loading",
  buttonSize: "large",
  text: "Action",
};
export const DefaultSmallLoading = Template.bind({});
DefaultSmallLoading.args = {
  status: "loading",
  buttonSize: "small",
  text: "Action",
};
export const DefaultOnlyIcon = Template.bind({});
DefaultOnlyIcon.args = {
  buttonSize: "normal",
  iconPosition: "onlyIcon",
  iconVariant: "sports_bar",
};
export const DefaultLargeOnlyIcon = Template.bind({});
DefaultLargeOnlyIcon.args = {
  buttonSize: "large",
  iconPosition: "onlyIcon",
  iconVariant: "sports_bar",
};
export const DefaultSmallOnlyIcon = Template.bind({});
DefaultSmallOnlyIcon.args = {
  buttonSize: "small",
  iconPosition: "onlyIcon",
  iconVariant: "sports_bar",
};

export const DefaultBorder = Template.bind({});
DefaultBorder.args = {
  buttonFilling: "border",
  buttonSize: "normal",
  text: "Action",
};
export const DefaultLargeBorder = Template.bind({});
DefaultLargeBorder.args = {
  buttonFilling: "border",
  buttonSize: "large",
  text: "Action",
};
export const DefaultSmallBorder = Template.bind({});
DefaultSmallBorder.args = {
  buttonFilling: "border",
  buttonSize: "small",
  text: "Action",
};

export const DefaultLoadingBorder = Template.bind({});
DefaultLoadingBorder.args = {
  buttonFilling: "border",
  status: "loading",
  buttonSize: "normal",
  text: "Action",
};
export const DefaultLargeLoadingBorder = Template.bind({});
DefaultLargeLoadingBorder.args = {
  buttonFilling: "border",
  status: "loading",
  buttonSize: "large",
  text: "Action",
};
export const DefaultSmallLoadingBorder = Template.bind({});
DefaultSmallLoadingBorder.args = {
  buttonFilling: "border",
  status: "loading",
  buttonSize: "small",
  text: "Action",
};
export const DefaultOnlyIconBorder = Template.bind({});
DefaultOnlyIconBorder.args = {
  buttonFilling: "border",
  buttonSize: "normal",
  iconPosition: "onlyIcon",
  iconVariant: "sports_bar",
};
export const DefaultLargeOnlyIconBorder = Template.bind({});
DefaultLargeOnlyIconBorder.args = {
  buttonFilling: "border",
  buttonSize: "large",
  iconPosition: "onlyIcon",
  iconVariant: "sports_bar",
};
export const DefaultSmallOnlyIconBorder = Template.bind({});
DefaultSmallOnlyIconBorder.args = {
  buttonFilling: "border",
  buttonSize: "small",
  iconPosition: "onlyIcon",
  iconVariant: "sports_bar",
};
