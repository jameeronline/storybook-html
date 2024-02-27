import { createWelcomePage } from "./Welcome";

export default {
  title: "Pages/Welcome",
  // tags: ["autodocs"],
  render: ({ ...args }) => createWelcomePage({ ...args }),
  argTypes: {
    servieTitle: { control: "text" },
    // mainBtnLbl: ButtonStories.default.args.label,
    // subBtnLbl: ButtonStories.default.args.label,
  },
  args: {
    servieTitle: "Welcome",
    // mainBtnLbl: "Start",
    // subBtnLbl: "View Request",
  },
};

export const Default = {};
