import React from "react";
import { Story, Meta } from "@storybook/react";
import Label, { LabelProps } from "./Label";

export default {
  title: "Label",
  component: Label,
  decorators: [
    (Story) => (
      <div style={{ margin: "1em", display: "flex" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Default",
  colorType: "default",
  iconPosition: "noIcon",
  onClick: null,
};

export const DefaultClickable = Template.bind({});
DefaultClickable.args = {
  text: "Default",
  colorType: "default",
  iconPosition: "noIcon",
  onClick: () => {},
};

export const Error = Template.bind({});
Error.args = {
  text: "Error",
  colorType: "error",
  onClick: null,
  iconPosition: "iconLeft",
  iconVariant: "error_outline",
};
export const Valid = Template.bind({});
Valid.args = {
  text: "Valid",
  colorType: "valid",
  onClick: null,
  iconPosition: "iconLeft",
  iconVariant: "check",
};
export const Warning = Template.bind({});
Warning.args = {
  text: "Warning",
  colorType: "warning",
  onClick: null,
  iconPosition: "iconRight",
  iconVariant: "report_problem",
};
export const Info = Template.bind({});
Info.args = {
  text: "Info",
  colorType: "info",
  onClick: null,
  iconPosition: "iconRight",
  iconVariant: "info_outline",
};
export const ErrorClickable = Template.bind({});
ErrorClickable.args = {
  text: "Error",
  colorType: "error",
  onClick: () => {},
  iconPosition: "iconLeft",
  iconVariant: "error_outline",
};
export const ValidClickable = Template.bind({});
ValidClickable.args = {
  text: "Valid",
  colorType: "valid",
  onClick: () => {},
  iconPosition: "iconLeft",
  iconVariant: "check",
};
export const WarningClickable = Template.bind({});
WarningClickable.args = {
  text: "Warning",
  colorType: "warning",
  onClick: () => {},
  iconPosition: "iconRight",
  iconVariant: "report_problem",
};
export const InfoClickable = Template.bind({});
InfoClickable.args = {
  text: "Info",
  colorType: "info",
  onClick: () => {},
  iconPosition: "iconRight",
  iconVariant: "info_outline",
};
