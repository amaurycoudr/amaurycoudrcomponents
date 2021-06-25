import { Meta, Story } from "@storybook/react";
import React from "react";
import Typo, { TypoPros } from "./Typo";

export default {
  title: "Typo",
  component: Typo,
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<TypoPros & { label: string }> = ({ label, ...args }) => (
  <Typo {...args}>{label}</Typo>
);

export const Default = Template.bind({});
Default.args = {
  variant: "body",
  textAlign: "justify",
  label:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus neque vel ipsum scelerisque blandit. Nulla ut erat ultricies eros dapibus accumsan. In mollis orci turpis. Praesent id orci fermentum, eleifend nisl nec, vestibulum dolor. Cras sed volutpat lorem. Nullam sed pulvinar justo, eu tempus ligula. Sed ornare eros sit amet diam eleifend hendrerit. Aliquam vel arcu eleifend, maximus mi ut, tempor dolor. In sed purus sed enim euismod ultricies. Curabitur ornare mi id finibus bibendum. Mauris id accumsan dui. Suspendisse nec ipsum lacinia libero viverra facilisis vel sed neque. Fusce sagittis enim a orci varius, in sodales nibh consectetur. Quisque gravida sapien in efficitur posuere. Duis vitae justo nec massa volutpat commodo.",
  color: "font.dark",
};

export const Title = Template.bind({});
Title.args = {
  label: "Title",
  color: "font.dark",
  variant: "title",
};

export const Section = Template.bind({});
Section.args = {
  label: "Section",
  color: "font.dark",
  variant: "section",
};

export const Header = Template.bind({});
Header.args = {
  label: "Header",
  color: "font.dark",
  variant: "header",
};

export const Label = Template.bind({});
Label.args = {
  label: "Label",
  color: "font.dark",
  variant: "label",
};

export const Body = Template.bind({});
Body.args = {
  label: "Body",
  color: "font.dark",
  variant: "body",
};

export const Legend = Template.bind({});
Legend.args = {
  label: "Legend",
  color: "font.dark",
  variant: "legend",
};
