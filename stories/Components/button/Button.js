//import "./button.css";

export const createButton = ({
  // primary = false,
  type = "Primary",
  size = "Medium",
  varient = "Solid",
  asChild = "button",
  block,
  shadow,
  disabled,
  //backgroundColor,
  label,
  onClick,
}) => {
  const btn = document.createElement(asChild);

  if (asChild == "input") {
    btn.value = label;
  } else {
    btn.innerText = label;
  }

  if (asChild == "a") {
    btn.href = "#";
  } else {
    btn.type = "button";
  }

  btn.addEventListener("click", onClick);

  //btn type
  const btnType = () => {
    switch (type) {
      case "Primary":
        return varient == "Solid" ? "btn--primary" : "btn--outline-primary";
      case "Secondary":
        return varient == "Solid" ? "btn--secondary" : "btn--outline-secondary";
      case "Ghost":
        return varient == "Solid" ? "btn--ghost" : "btn--outline-ghost";
      case "Link":
        return "btn--link";
      default:
        return "";
    }
  };

  //btn size
  const btnSize = () => {
    switch (size) {
      case "Small":
        return "btn--sm";
      case "Large":
        return "btn--lg";
      case "Medium":
        return "btn--md";
      default:
        return "";
    }
  };

  const isDisabled = disabled ? "btn--disabled" : "";
  btn.disabled = disabled;

  const isBlock = block ? "btn--block" : "";

  btn.className = ["btn", btnType(), btnSize(), isBlock, isDisabled]
    .join(" ")
    .trim();

  return btn;
};
