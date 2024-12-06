import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import LoginForm from "../components/LoginForm";

const meta = {
  title: "LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const loginform: Story = {};

export const loginformWithEmailError: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole("button", { name: /로그인하기/ });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
  },
};

export const loginformWithPasswordError: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // email input
    const emailInput = canvas.getByPlaceholderText("email");
    await expect(emailInput).toBeInTheDocument();
    await userEvent.type(emailInput, "yunajoe@gmail.com");
    // password input
    const passwordInput = canvas.getByPlaceholderText("password");
    await expect(passwordInput).toBeInTheDocument();

    // 로그인하기 버튼
    const loginButton = canvas.getByRole("button", { name: /로그인하기/ });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
  },
};
