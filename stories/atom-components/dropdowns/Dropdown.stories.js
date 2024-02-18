import { createDropdown } from "./Dropdowns";

export default {
  title: "Components/Dropdown",
  tags: ["autodocs"],
  render: ({ ...args }) => createDropdown({ ...args }),
  argTypes: {
    label: {
      control: { type: "text" },
    },
    type: {
      control: { type: "select" },
      options: ["primary", "secondary", "success", "danger", "warning", "info"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "lg", "default"],
    },
    options: {
      control: { type: "array" },
    },
  },
  args: {
    type: "primary",
    label: "Select Services",
    options: [
      "Civil Affairs",
      "Passports",
      "Public Security",
      "General Services",
    ],
  },
};

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
