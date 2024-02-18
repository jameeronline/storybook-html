export const createInput = ({
  type = "text",
  placeholder,
  name,
  id,
  size,
  label,
  labelText,
  helpText,
  helpTextLabel,
}) => {
  const inputWrapper = document.createElement("div");
  inputWrapper.className = "form-group";

  //append label
  if (label) {
    const labelEl = document.createElement("label");
    labelEl.innerText = labelText;
    labelEl.className = "form-label";
    inputWrapper.insertAdjacentElement("afterbegin", labelEl);
  }

  const input = document.createElement("input");
  input.type = type;
  inputWrapper.insertAdjacentElement("beforeend", input);

  if (helpText) {
    const helpTextEl = document.createElement("div");
    helpTextEl.innerText = helpTextLabel;
    helpTextEl.className = "form-text";
    inputWrapper.insertAdjacentElement("beforeend", helpTextEl);
  }

  //size
  const inputSize = () => {
    switch (size) {
      case "small":
        return "form-control-sm";
      case "large":
        return "form-control-lg";
      default:
        return "";
    }
  };

  //class
  input.className = ["form-control", inputSize(), "mb-2"].join(" ").trim();

  //placeholder
  input.placeholder = placeholder;

  //name
  input.name = name;

  //id
  input.id = id;

  return inputWrapper;
};
