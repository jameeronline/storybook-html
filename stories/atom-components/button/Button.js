export const createButton = ({
  // primary = false,
  type = "primary",
  size = "medium",
  varient = "solid",
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
      case "primary":
        return varient == "solid" ? "btn--primary" : "btn--outline-primary";
      case "secondary":
        return varient == "solid" ? "btn--secondary" : "btn--outline-secondary";
      case "ghost":
        return varient == "solid" ? "btn--ghost" : "btn--outline-ghost";
      case "link":
        return "btn--link";
      default:
        return "btn--primary";
    }
  };

  //btn size
  const btnSize = () => {
    switch (size) {
      case "small":
        return "btn--sm";
      case "medium":
        return "btn--md";
      case "large":
        return "btn--lg";
      default:
        return "btn--md";
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
