export const createRadio = ({
  isVertical,
  isMultiple,
  label,
  optionsLength = 1,
}) => {
  const radioWrapper = document.createElement("div");
  radioWrapper.className = `form-group ${
    isVertical ? "form-group--vertical-check" : "form-group--horizontal-check"
  }`;

  let radioString = "";

  for (let i = 0; i < optionsLength; i++) {
    radioString += `
  <label class="form-check">
    <input class="form-check__control" type="radio" value="own-${
      i + 1
    }" name="property-ownership"/>
    <span class="form-label form-check__label">${label}</span>
  </label>
`;
  }

  radioWrapper.insertAdjacentHTML("beforeend", radioString);

  return radioWrapper;
};
