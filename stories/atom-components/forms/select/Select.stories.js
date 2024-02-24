import { createSelectbox } from "./Select";

export default {
  title: "Forms / Select",
  tags: ["autodocs"],
  render: ({ ...args }) => createSelectbox({ ...args }),
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg"],
    },
    label: { control: "boolean" },
    labelText: {
      control: { type: "text", if: { arg: "label" } },
    },
    options: Array,
    multiple: Boolean,
    disabled: Boolean,
  },
  args: {
    label: true,
    labelText: "Select",
    options: [
      "Civil Affairs",
      "Passports",
      "Public Security",
      "General Services",
    ],
    multiple: false,
    disabled: false,
  },
};

export const Default = {
  args: {
    label: true,
  },
};

export const Multiple = {
  args: {
    multiple: true,
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};
