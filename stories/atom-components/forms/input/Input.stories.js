import { createInput } from "./Input";

export default {
  title: "Forms/Input",
  tags: ["autodocs"],
  render: ({ type, ...args }) => {
    return createInput({ type, ...args });
  },
  argTypes: {
    label: {
      control: "boolean",
    },
    labelText: { control: "text", if: { arg: "label" } },
    placeholder: { control: "text" },
    name: { control: "text" },
    id: { control: "text" },
    type: {
      control: "select",
      description: "Choose the input types from dropdown",
      options: ["text", "password", "email", "tel", "search", "date"],
      table: {
        defaultValue: { summary: "text" },
      },
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    helptext: Boolean,
    helptextLabel: {
      control: "text",
      if: { arg: "helptext" },
    },
  },
  args: {
    placeholder: "Placeholder",
    type: "text",
    name: "form-element-name",
    id: "form-element-id",
    label: true,
    labelText: "label",
    helptext: false,
    helptextLabel: "input helptext hint",
  },
};

export const Default = {
  args: {
    type: "text",
  },
};

export const Small = {
  args: {
    size: "small",
  },
};

export const Medium = {
  args: {
    size: "medium",
  },
};

export const Large = {
  args: {
    size: "large",
  },
};
