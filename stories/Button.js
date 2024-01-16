//import "./button.css";
import classNames from "classnames";

export const createButton = ({
  // primary = false,
  type = "primary",
  size = "medium",
  backgroundColor,
  label,
  onClick,
}) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = label;
  btn.addEventListener("click", onClick);

  //Button type
  const mode = classNames(
    {
      "absher-button--primary": type === "primary" ? true : null,
    },
    {
      "absher-button--secondary": type === "secondary" ? true : null,
    },
    {
      "absher-button--ghost": type === "ghost" ? true : null,
    },
    {
      "absher-button--link": type === "link" ? true : null,
    }
  );

  btn.className = ["absher-button", `absher-button--${size}`, mode].join(" ");

  btn.style.backgroundColor = backgroundColor;

  return btn;
};
