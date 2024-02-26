import { createWelcome } from "./Welcome";
import * as ButtonStories from "../../atom-components/button/Button.stories";

export default {
  title: "Pages/Welcome",
  tags: ["autodocs"],
  render: ({ ...args }) => createWelcome({ ...args }),
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
