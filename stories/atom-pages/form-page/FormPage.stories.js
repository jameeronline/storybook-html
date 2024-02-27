import { createFormPage } from "./FormPage";

export default {
  title: "Pages/Form",
  // tags: ["autodocs"],
  render: ({ ...args }) => createFormPage({ ...args }),
  argTypes: {
    servieTitle: { control: "text" },
    // mainBtnLbl: ButtonStories.default.args.label,
    // subBtnLbl: ButtonStories.default.args.label,
  },
  args: {
    servieTitle: "Service Page - Form",
    // mainBtnLbl: "Start",
    // subBtnLbl: "View Request",
  },
};

export const Default = {};
