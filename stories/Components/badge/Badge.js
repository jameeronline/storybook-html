export const createBadge = ({
  // primary = false,
  type = "primary",
  size = "medium",
  //backgroundColor,
  label,
  //onClick,
}) => {
  const badge = document.createElement("span");
  //badge.type = "button";
  badge.innerText = label;
  //badge.addEventListener("click", onClick);

  // const mode =
  //   type === "primary"
  //     ? "storybook-badge--primary"
  //     : type === "secondary"
  //     ? "storybook-badge--secondary"
  //     : "storybook-badge--ghost";
  badge.className = ["badge", "text-bg-danger"].join(" ");

  //badge.style.backgroundColor = backgroundColor;

  return badge;
};
