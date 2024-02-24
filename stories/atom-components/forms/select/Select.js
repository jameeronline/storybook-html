export const createSelectbox = ({
  size,
  label,
  labelText,
  multiple,
  disabled,
  options,
}) => {
  const selectEl = document.createElement("select");

  //append label
  if (label) {
    const labelEl = document.createElement("label");
    labelEl.innerText = labelText;
    labelEl.className = "form-label";
    console.log(labelEl);
    selectEl.insertAdjacentElement("beforebegin", labelEl);
  }

  if (multiple) {
    selectEl.setAttribute("multiple", true);
  }

  if (disabled) {
    selectEl.setAttribute("disabled", true);
  }

  //add initial selected item
  let optionsList = "";
  selectEl.insertAdjacentHTML(
    "beforeend",
    "<option selected='selected'>Open this menu</option>"
  );

  const optionList = options.map((item) => `<option>${item}</option>`);

  selectEl.insertAdjacentHTML("beforeend", optionList);

  //size
  const inputSize = () => {
    switch (size) {
      case "sm":
        return "form-select-sm";
      case "lg":
        return "form-select-lg";
      default:
        return "";
    }
  };

  //class
  selectEl.className = ["form-select", inputSize()].join(" ").trim();

  return selectEl;
};
