export const createDropdown = ({ type, label, options, size }) => {
  const dropdownEl = document.createElement("div");

  const optionList = options.map(
    (item) => `<li><a class="dropdown-item" href="#">${item}</a></li>`
  );

  dropdownEl.insertAdjacentHTML(
    "afterbegin",
    `<div class="dropdown">
  <button class="btn btn-${type} ${
      size !== "default" ? `btn-${size}` : ""
    } dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    ${label}
  </button>
  <ul class="dropdown-menu">
    ${optionList.toString().replaceAll(",", "")}
  </ul>
</div>`
  );

  return dropdownEl;
};
