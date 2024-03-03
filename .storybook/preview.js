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
          "Pages",
          [
            "Welcome",
            "Form",
            "Data Table",
            "Confirmation",
            "Payment",
            "Success",
          ],
          "Components",
          "Forms",
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

// preview.js

// export const globalTypes = {
//   locale: {
//     name: "Locale",
//     description: "Internationalization locale",
//     defaultValue: "en",
//     toolbar: {
//       icon: "globe",
//       items: [
//         { value: "en-US", right: "LTR", title: "English (United States)" },
//         { value: "es", right: "LTR", title: "Spanish" },
//         { value: "ar", right: "RTL", title: "Arabic" },
//         { value: "ar-OM", right: "RTL", title: "Arabic (Oman)" },
//         { value: "pa-IN", right: "LTR", title: "Punjabi (India)" },
//         { value: "pa-PK", right: "RTL", title: "Punjabi (Pakistan)" },
//       ],
//     },
//   },
// };

// export const parameters = {
//   rtlDirection: {
//     // Collection to set as RTL (You can add language or with add country code specifically)
//     autoLocales: ["ar", "pa-PK"],
//     // Condition to reload the page each time locale is updated
//     reload: true,
//   },
// };
