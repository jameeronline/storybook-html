import { createBadge } from "./Badge";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Example/Badge",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createBadge({ label, ...args });
  },
  argTypes: {
    backgroundColor: { control: "color" },
    label: { control: "text" },
    //onClick: { action: "onClick" },
    type: {
      control: { type: "select" },
      options: ["primary", "secondary", "ghost"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "xlarge"],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    type: "primary",
    label: "Button",
  },
};

export const Secondary = {
  args: {
    type: "secondary",
    label: "Button",
  },
};

export const Ghost = {
  args: {
    type: "ghost",
    label: "Button",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
};

export const Xlarge = {
  args: {
    size: "xlarge",
    label: "Button",
  },
};
