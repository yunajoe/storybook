import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Input from "../components/Input";

const meta = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
  args: { onChange: fn() },
} satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    label: "default인풋",
    value: "yunajoe",
    placeholder: "username",
  },
};

export const InputWithError: Story = {
  args: {
    label: "인풋에러",
    value: "",
    placeholder: "email",
    errorMessage: "이메일을 기입해주세요",
  },
};
