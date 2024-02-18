import { createButton } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Components/Button",
  description:
    "Spruce comes with basic button variations like size, width, color, state and can also generate your custom color variants.",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    return createButton({ label, ...args });
  },
  argTypes: {
    disabled: Boolean,
    block: Boolean,
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
      description: "Type varient {primary, secondary}",
      defaultValue: "primary",
      options: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
        "link",
      ],
    },
    size: {
      control: { type: "select" },
      description: "Size varient {sm, lg}",
      options: ["sm", "default", "lg"],
    },
    varient: {
      control: { type: "inline-radio" },
      defaultValue: "solid",
      options: ["solid", "outline"],
    },
  },
  args: {
    label: "Button",
    type: "",
    varient: "solid",
    block: false,
    disabled: false,
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {};

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

export const Link = {
  args: {
    type: "link",
  },
};

export const Small = {
  args: {
    size: "sm",
    type: "primary",
  },
};

export const Large = {
  args: {
    size: "lg",
    type: "primary",
  },
};

export const Block = {
  name: "Block",
  args: {
    block: true,
    type: "primary",
  },
};
