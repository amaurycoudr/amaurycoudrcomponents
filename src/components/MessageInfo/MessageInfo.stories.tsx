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
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const Template: Story<MessageInfoProps & { text: string }> = ({
  text,
  ...args
}) => <MessageInfo {...args}>{text}</MessageInfo>;

const loraIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida enim sit amet massa varius, eget tincidunt dui facilisis. Aliquam ac ligula tellus. Aliquam vitae mattis dolor, ut vestibulum sem. Sed metus elit, lacinia at nisi sit amet, egestas vulputate mauris.";

export const DefaultIcon = Template.bind({});
DefaultIcon.args = {
  text: loraIpsum,
  colorType: "default",
  iconVariant: "info",
};
export const ErrorIcon = Template.bind({});
ErrorIcon.args = {
  text: loraIpsum,
  colorType: "error",
  iconVariant: "info",
};
export const ValidIcon = Template.bind({});
ValidIcon.args = {
  text: loraIpsum,
  colorType: "valid",
  iconVariant: "info",
};
export const WarningIcon = Template.bind({});
WarningIcon.args = {
  text: loraIpsum,
  colorType: "warning",
  iconVariant: "info",
};
export const InfoIcon = Template.bind({});
InfoIcon.args = {
  text: loraIpsum,
  colorType: "info",
  iconVariant: "info",
};
