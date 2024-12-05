import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button from "../components/Button";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  // controls 개발자가 코드를 따로 변경하지 않고 Storybook에서 arguments를 동적으로 바꿔가며 인터렉션할 수 있도록 도와주는 기능 (ex. color, 텍스트 등 바꿔보기)
  argTypes: {
    backgroundColor: { control: "color" },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
  args: {
    primary: true,
    label: "primary-button",
  },
};
export const DefaultButton: Story = {
  args: {
    label: "default-button",
  },
};
export const SmallButton: Story = {
  args: {
    label: "large-button",
    size: "sm",
  },
};

export const LargeButton: Story = {
  args: {
    label: "large-button",
    size: "lg",
  },
};
