import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

export const createOwlCarousel = () => {
  const carouselEl = document.createElement("div");

  carouselEl.insertAdjacentHTML(
    "afterbegin",
    `<div class="owl-carousel owl-theme">
    <div> Your Content </div>
    <div> Your Content </div>
    <div> Your Content </div>
    <div> Your Content </div>
    <div> Your Content </div>
    <div> Your Content </div>
    <div> Your Content </div>
  </div>`
  );

  return carouselEl;
};
