import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import LoginPage from "../components/LoginPage";

const meta = {
  title: "LoginPage",
  component: LoginPage,
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;
export const LoggedOut: Story = {};

export const LoggingIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole("button", { name: /로그인/ });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole("button", { name: /로그아웃/i });
    await expect(logoutButton).toBeInTheDocument();
    await userEvent.click(logoutButton);
  },
};
