import { addons } from "@storybook/manager-api";
import { themes } from "@storybook/theming";
import { create } from "@storybook/theming/create";

addons.setConfig({
  theme: create({
    base: "light",
    // brandTitle: "Absher Storybook",
    brandUrl: "https://absher.sa",
    // brandImage: "https://storybook.js.org/images/placeholders/350x150.png",
    brandTarget: "_blank",
    // Typography
    fontBase: '"Roboto", sans-serif',
    fontCode: "monospace",
  }),
});
