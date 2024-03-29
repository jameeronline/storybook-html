import { createBadge } from "./Badge";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Components/Badge",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createBadge({ label, ...args });
  },
  argTypes: {
    //backgroundColor: { control: "color" },
    label: { control: "text" },
    //onClick: { action: "onClick" },
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
    rounded: Boolean,
  },
  args: {
    label: "badge",
    type: "primary",
    rounded: false,
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
