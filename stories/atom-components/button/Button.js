export const createButton = ({
  // primary = false,
  type = "primary",
  size,
  varient,
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
    const variantClass =
      varient === "solid" ? `btn-${type}` : `btn-outline-${type}`;

    return type === "link" ? "btn-link" : `${variantClass}`;
  };

  //btn type
  // const btnType = () => {
  //   switch (type) {
  //     case "primary":
  //       return varient == "solid" ? "btn-primary" : "btn-outline-primary";
  //     case "secondary":
  //       return varient == "solid" ? "btn-secondary" : "btn-outline-secondary";
  //     case "success":
  //       return varient == "solid" ? "btn-success" : "btn-outline-success";
  //     case "danger":
  //       return varient == "solid" ? "btn-danger" : "btn-outline-danger";
  //     case "warning":
  //       return varient == "solid" ? "btn-warning" : "btn-outline-warning";
  //     case "info":
  //       return varient == "solid" ? "btn-info" : "btn-outline-info";
  //     case "light":
  //       return varient == "solid" ? "btn-light" : "btn-outline-light";
  //     case "dark":
  //       return varient == "solid" ? "btn-dark" : "btn-outline-dark";
  //     case "link":
  //       return "btn-link";
  //     default:
  //       return "";
  //   }
  // };

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
