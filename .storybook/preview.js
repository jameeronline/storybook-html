/** @type { import('@storybook/html').Preview } */

//global styles import
import "../src/css/styles.scss";

//import "jquery";
//bootstrap imports
//import "bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/js/bootstrap";

const preview = {
  parameters: {
    //layout: "centered",
    options: {
      storySort: {
        order: [
          "Getting Started",
          "Styleguide",
          "Components",
          "Forms",
          "Pages",
          [
            "Welcome",
            "Form",
            "Data Table",
            "Confirmation",
            "Payment",
            "Success",
          ],
          "Templates",
          "*",
        ],
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#f8f8f8" },
        { name: "dark", value: "#333" },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      sort: "requiredFirst",
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
