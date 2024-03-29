export const createGlideJsSlider = () => {
  const carouselEl = document.createElement("div");

  carouselEl.insertAdjacentHTML(
    "afterbegin",
    `<div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li class="glide__slide">
          <img src="https://source.unsplash.com/fNXY1xjZQYI" alt="image" />
        </li>
        <li class="glide__slide">
          <img src="https://source.unsplash.com/fNXY1xjZQYI" alt="image" />
        </li>
        <li class="glide__slide">
          <img src="https://source.unsplash.com/fNXY1xjZQYI" alt="image" />
        </li>
      </ul>
    </div>
    <div class="glide__arrows" data-glide-el="controls">
    <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
    <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
  </div>
  </div>`
  );

  return carouselEl;
};
