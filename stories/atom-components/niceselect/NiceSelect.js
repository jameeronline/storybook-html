export const createNiceSelect = () => {
  const niceselectEl = document.createElement("div");

  niceselectEl.insertAdjacentHTML(
    "afterbegin",
    `
    <input type="text" id="my-date" placeholder="Choose Date" class="form-control" />
    `
  );

  return niceselectEl;
};
