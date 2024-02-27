import { createConfirmationPage } from "./Confirmation";

export default {
  title: "Pages/Confirmation",
  //   tags: ["autodocs"],
  render: ({ ...args }) => createConfirmationPage({ ...args }),
  argTypes: {
    serviceTitle: { control: "text" },
    // mainBtnLbl: ButtonStories.default.args.label,
    // subBtnLbl: ButtonStories.default.args.label,
  },
  args: {
    serviceTitle: "Service Page - Confirmation",
    // mainBtnLbl: "Start",
    // subBtnLbl: "View Request",
  },
};

export const Default = {};
