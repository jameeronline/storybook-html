import { createGlideJsSlider } from "./Owlcarousel";

import Glide from "@glidejs/glide";

export default {
  title: "Components/Glide JS",
  tags: ["autodocs"],
  render: () => createGlideJsSlider(),
};

export const Default = {
  loaders: [
    async () => {
      document.addEventListener("DOMContentLoaded", () => {
        new Glide(".glide").mount();
      });
    },
  ],
};
