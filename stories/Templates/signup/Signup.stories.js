import { createSignUp } from "./Signup";

export default {
  title: "Templates/Signup",
  render: ({ ...args }) => createSignUp({ ...args }),
  tags: ["autodocs"],
  argTypes: {
    primaryBtnLbl: { control: { type: "text" } },
    secondaryBtnLbl: { control: { type: "text" } },
  },
  args: {
    primaryBtnLbl: "Signup",
    secondaryBtnLbl: "Login",
  },
};

export const Default = {
  args: {
    primaryBtnLbl: "Sign",
    secondaryBtnLbl: "Login",
  },
};
