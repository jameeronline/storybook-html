import { createRadio } from "./Radio";

export default {
  title: "Forms/Radio",
  tags: ["autodocs"],
  render: ({ ...args }) => createRadio({ ...args }),
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
    label: "Civil Affairs, Passports, Public Security, General Services",
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
