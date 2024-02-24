export const createCheckbox = ({
  isVertical,
  isMultiple,
  label,
  optionsLength = 1,
}) => {
  const checkboxWrapper = document.createElement("div");
  checkboxWrapper.className = "form-check-group";
  const checkboxDirection = isVertical ? "form-check-inline" : "";

  let checkboxString = "";
  const labelGroup = label.split(",");

  for (let i = 0; i < optionsLength; i++) {
    checkboxString += `
  <label class="form-check ${checkboxDirection}">
    <input class="form-check-input" type="checkbox" value="own-${
      i + 1
    }" name="property-ownership-${i + 1}"/>
    <span class="form-label form-check-label">${labelGroup[i]}</span>
  </label>
`;
  }

  checkboxWrapper.insertAdjacentHTML("beforeend", checkboxString);

  return checkboxWrapper;
};
