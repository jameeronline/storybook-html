import { createLogin } from "./Login";

export default {
  title: "Templates/Login",
  render: ({ ...args }) => createLogin({ ...args }),
  tags: ["autodocs"],
  argsTypes: {
    primaryBtnLbl: { control: { type: "text" } },
    secondaryBtnLbl: { control: { type: "text" } },
  },
  args: {
    primaryBtnLbl: "Login",
    secondaryBtnLbl: "Sign up",
  },
};

export const Default = {
  args: {
    primaryBtnLbl: "Login ",
    secondaryBtnLbl: "Sign Up",
  },
};
