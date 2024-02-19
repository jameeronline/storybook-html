import { createTextElement } from "./TextElement";

export default {
  title: "Components/Text",
  tags: ["autodocs"],
  render: ({ ...args }) => createTextElement({ ...args }),
  argTypes: {
    content: { control: "text" },
    asChild: {
      control: { type: "select" },
      options: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "a", "span"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
      if: { arg: "asChild", eq: "p" },
    },
  },
  args: {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    asChild: "p",
  },
};

export const Small = {
  args: {
    asChild: "p",
    size: "sm",
  },
};

export const Medium = {
  args: {
    asChild: "p",
    size: "md",
  },
};

export const Large = {
  args: {
    asChild: "p",
    size: "lg",
  },
};

export const ExtraLarge = {
  args: {
    asChild: "p",
    size: "xl",
  },
};
