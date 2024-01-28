import { createCheckbox } from "./Checkbox";

export default {
  title: "Forms/Checkbox",
  tags: ["autodocs"],
  render: ({ ...args }) => createCheckbox({ ...args }),
  argTypes: {
    label: {
      control: { type: "text" },
    },
    isMultiple: {
      control: "boolean",
    },
    optionsLength: {
      control: "select",
      options: ["2", "3", "4"],
      if: { arg: "isMultiple" },
    },
    isVertical: {
      control: "boolean",
      if: { arg: "isMultiple" },
    },
  },
  args: {
    label: "label",
    isMultiple: false,
    optionsLength: 2,
    isVertical: false,
  },
};

export const Single = {
  args: {
    isMultiple: false,
  },
};

export const Multiple = {
  args: {
    isMultiple: true,
  },
};

export const Horizontal = {
  args: {
    isMultiple: true,
    optionsLength: 4,
    isVertical: false,
  },
};

export const Vertical = {
  args: {
    isMultiple: true,
    optionsLength: 4,
    isVertical: true,
  },
};
