export const createBadge = ({
  // primary = false,
  type = "primary",
  size = "medium",
  //backgroundColor,
  label,
  rounded,
  //onClick,
}) => {
  const badge = document.createElement("span");
  //badge.type = "button";
  badge.innerText = label;
  //badge.addEventListener("click", onClick);

  //btn type
  const badgeType = () => {
    return `text-bg-${type}`;
  };

  badge.className = ["badge", badgeType(), rounded ? "rounded-pill" : ""].join(
    " "
  );

  return badge;
};
