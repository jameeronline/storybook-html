import { createAlert } from "./Alerts";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Components/Alert",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createAlert({ label, ...args });
  },
  argTypes: {
    title: Boolean,
    titleText: { control: "text", if: { arg: "title" } },
    label: { control: "text" },
    type: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ],
    },
    icon: Boolean,
    closeBtn: Boolean,
  },
  args: {
    type: "primary",
    label: "A simple primary alert—check it out!",
    title: false,
    titleText: "Alert title",
    icon: false,
    closeBtn: false,
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    type: "primary",
  },
};

export const Secondary = {
  args: {
    type: "secondary",
  },
};

export const Success = {
  args: {
    type: "success",
  },
};

export const Danger = {
  args: {
    type: "danger",
  },
};

export const Warning = {
  args: {
    type: "warning",
  },
};

export const Info = {
  args: {
    type: "info",
  },
};

export const Light = {
  args: {
    type: "light",
  },
};

export const Dark = {
  args: {
    type: "dark",
  },
};
