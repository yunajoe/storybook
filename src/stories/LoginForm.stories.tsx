import { Meta, StoryObj } from "@storybook/react";
import LoginForm from "../components/LoginForm";

const meta = {
  title: "LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const loginform: Story = {};

export const loginformWithError: Story = {};
