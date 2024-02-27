import { createGlideJsSlider } from "./Glidejs";

import Glide from "@glidejs/glide";

export default {
  title: "Vendor/Glide JS",
  tags: ["autodocs"],
  render: () => createGlideJsSlider(),
  loaders: [
    async () => {
      document.addEventListener("DOMContentLoaded", () => {
        new Glide(".glide").mount();
      });
    },
  ],
};

export const Default = {};
