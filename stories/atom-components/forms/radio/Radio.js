export const createRadio = ({
  isVertical,
  isMultiple,
  label,
  optionsLength = 1,
}) => {
  const radioWrapper = document.createElement("div");
  const checkboxDirection = isVertical ? "form-check-inline" : "";

  let radioString = "";
  const labelGroup = label.split(",");

  for (let i = 0; i < optionsLength; i++) {
    radioString += `
  <label class="form-check ${checkboxDirection}">
    <input class="form-check-input" type="radio" value="own-${
      i + 1
    }" name="property-ownership"/>
    <span class="form-label form-check-label">${labelGroup[i]}</span>
  </label>
`;
  }

  radioWrapper.insertAdjacentHTML("beforeend", radioString);

  return radioWrapper;
};
