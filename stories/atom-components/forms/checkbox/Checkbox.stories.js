import { createCheckbox } from "./Checkbox";

export default {
  title: "Forms/Checkbox",
  tags: ["autodocs"],
  render: ({ ...args }) => createCheckbox({ ...args }),
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Add multiple label values with ',' as a seperator.",
    },
    isMultiple: {
      control: "boolean",
      description: "Toggle the multiple checkbox",
    },
    optionsLength: {
      control: "select",
      description: "Change the number of checkbox",
      options: ["1", "2", "3", "4"],
      if: { arg: "isMultiple" },
    },
    isVertical: {
      control: "boolean",
      description:
        "change the orientation of the multiple checkbox inline or block",
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
