import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button from "../components/Button";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
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
