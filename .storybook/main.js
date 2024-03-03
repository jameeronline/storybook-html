/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    //👈 The a11y addon goes here
    "@storybook/addon-a11y",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-viewport",
    "@storybook/addon-storysource",
    "storybook-addon-rtl-direction",
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  staticDirs: ["../src/assets"],
  docs: {
    autodocs: "tag",
    toc: true,
  },
  // core: {
  //   builder: "@storybook/builder-vite", // 👈 The builder enabled here.
  // },
};
export default config;
