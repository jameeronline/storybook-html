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
    backgrounds: {
      values: [
        { name: "light", value: "#fff" },
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
