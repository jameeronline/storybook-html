export const createButton = ({
  // primary = false,
  type = "primary",
  size,
  outline,
  asChild = "button",
  block,
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

  const btnType = () => {
    const variantClass = outline ? `btn-outline-${type}` : `btn-${type}`;

    return type === "link" ? "btn-link" : `${variantClass}`;
  };

  //btn size
  const btnSize = () => {
    switch (size) {
      case "sm":
        return "btn-sm";
      case "lg":
        return "btn-lg";
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
