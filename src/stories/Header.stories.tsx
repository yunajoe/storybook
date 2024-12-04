import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Header from "../components/Header";

const meta = {
  title: "Example/Header",
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    onLogin: fn(),
    onLogOut: fn(),
    onCreateAccount: fn(),
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// 로그인한 상태

export const LoggedIn: Story = {
  args: {
    user: {
      name: "여나쪼",
    },
  },
};

// 로그아웃한 상태
export const LoggedOut: Story = {};
