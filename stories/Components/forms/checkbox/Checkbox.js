export const createCheckbox = ({
  isVertical,
  isMultiple,
  label,
  optionsLength = 1,
}) => {
  const checkboxWrapper = document.createElement("div");
  checkboxWrapper.className = `form-group ${
    isVertical ? "form-group--vertical-check" : "form-group--horizontal-check"
  }`;

  let checkboxString = "";

  for (let i = 0; i < optionsLength; i++) {
    checkboxString += `
  <label class="form-check">
    <input class="form-check__control" type="checkbox" value="own-${
      i + 1
    }" name="property-ownership-${i + 1}"/>
    <span class="form-label form-check__label">${label}</span>
  </label>
`;
  }

  checkboxWrapper.insertAdjacentHTML("beforeend", checkboxString);

  return checkboxWrapper;
};
