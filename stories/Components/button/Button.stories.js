import { createButton } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Components/Button",
  description:
    "Spruce comes with basic button variations like size, width, color, state and can also generate your custom color variants.",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createButton({ label, ...args });
  },
  argTypes: {
    disabled: Boolean,
    block: Boolean,
    shadow: Boolean,
    label: { control: "text" },
    onClick: { action: "onClick" },
    asChild: {
      control: { type: "select" },
      defaultValue: "button",
      description: "Change button element",
      options: ["a", "button", "input"],
    },
    type: {
      control: { type: "select" },
      description: "Button types",
      defaultValue: "primary",
      options: ["primary", "secondary", "ghost", "link"],
    },
    size: {
      control: { type: "select" },
      description: "Size varients",
      options: ["small", "medium", "large"],
    },
    varient: {
      control: { type: "inline-radio" },
      defaultValue: "solid",
      options: ["solid", "outline"],
    },
  },
  args: {
    label: "Button",
    type: "primary",
    size: "medium",
    block: false,
    disabled: false,
    shadow: false,
    varient: "solid",
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    type: "Primary",
  },
};

export const Secondary = {
  args: {
    type: "secondary",
  },
};

export const Ghost = {
  args: {
    type: "ghost",
  },
};

export const Link = {
  args: {
    type: "link",
  },
};

export const Small = {
  args: {
    size: "small",
  },
};

export const Large = {
  args: {
    size: "large",
  },
};

export const Block = {
  name: "Block Button",
  args: {
    block: true,
  },
};
