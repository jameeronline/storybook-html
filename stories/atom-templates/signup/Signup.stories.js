import { createSignUp } from "./Signup";

export default {
  title: "Templates/Signup",
  render: ({ ...args }) => createSignUp({ ...args }),
  tags: ["autodocs"],
  argTypes: {
    primaryBtnLbl: { control: { type: "text" } },
    secondaryBtnLbl: { control: { type: "text" } },
    confirmPassword: {
      control: { type: "boolean" },
    },
  },
  args: {
    primaryBtnLbl: "Signup",
    secondaryBtnLbl: "Login",
    confirmPassword: false,
  },
};

export const Default = {
  args: {
    primaryBtnLbl: "Sign Up",
    secondaryBtnLbl: "Login",
  },
};
