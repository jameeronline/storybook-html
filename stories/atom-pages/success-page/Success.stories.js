import { craeteSuccessPage } from "./Success";

export default {
  title: "Pages/Success",
  // tags: ["autodocs"],
  render: ({ ...args }) => craeteSuccessPage({ ...args }),
  argTypes: {
    serviceTitle: { control: "text" },
    // mainBtnLbl: ButtonStories.default.args.label,
    // subBtnLbl: ButtonStories.default.args.label,
  },
  args: {
    serviceTitle: "Service Page - Success",
    // mainBtnLbl: "Start",
    // subBtnLbl: "View Request",
  },
};

export const Default = {};
