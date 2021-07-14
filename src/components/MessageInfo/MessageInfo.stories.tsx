import React from "react";
import { Story, Meta } from "@storybook/react";
import MessageInfo, { MessageInfoProps } from "./MessageInfo";

export default {
  title: "MessageInfo",
  component: MessageInfo,
  decorators: [
    (Story) => (
      <div style={{ margin: "1em", display: "flex", maxWidth: 500 }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<MessageInfoProps & { text: string }> = ({
  text,
  ...args
}) => <MessageInfo {...args}>{text}</MessageInfo>;

const loraIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida enim sit amet massa varius, eget tincidunt dui facilisis. Aliquam ac ligula tellus. Aliquam vitae mattis dolor, ut vestibulum sem. Sed metus elit, lacinia at nisi sit amet, egestas vulputate mauris.";

export const DefaultColor = Template.bind({});
DefaultColor.args = {
  text: loraIpsum,
  colorType: "default",
  iconVariant: "info",
};
export const ErrorColor = Template.bind({});
ErrorColor.args = {
  text: loraIpsum,
  colorType: "error",
  iconVariant: "error",
};
export const ValidColor = Template.bind({});
ValidColor.args = {
  text: loraIpsum,
  colorType: "valid",
  iconVariant: "check_circle",
};
export const WarningColor = Template.bind({});
WarningColor.args = {
  text: loraIpsum,
  colorType: "warning",
  iconVariant: "warning",
};
export const InfoColor = Template.bind({});
InfoColor.args = {
  text: loraIpsum,
  colorType: "info",
  iconVariant: "info",
};
