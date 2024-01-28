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
      options: ["Primary", "Secondary", "Ghost", "Link"],
    },
    size: {
      control: { type: "select" },
      description: "Size varients",
      options: ["Small", "Medium", "Large"],
    },
    varient: {
      control: { type: "inline-radio" },
      options: ["Solid", "Outline"],
    },
  },
  args: {
    label: "Button",
    type: "Primary",
    size: "Medium",
    block: false,
    disabled: false,
    shadow: false,
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
    type: "Secondary",
  },
};

export const Ghost = {
  args: {
    type: "Ghost",
  },
};

export const Link = {
  args: {
    type: "Link",
  },
};

export const Small = {
  args: {
    size: "Small",
  },
};

export const Large = {
  args: {
    size: "Large",
  },
};
