export const createTextElement = ({ asChild, content, size }) => {
  const taregtEL = document.createElement(asChild);
  taregtEL.innerText = content;

  //heading class names
  const headingClass = () => {
    switch (asChild) {
      case "h1":
        return "heading-1";
      case "h2":
        return "heading-2";
      case "h3":
        return "heading-3";
      case "h4":
        return "heading-4";
      case "h5":
        return "heading-5";
      case "h6":
        return "heading-6";
      default:
        return "";
    }
  };

  //class names type
  const mode = () => {
    switch (size) {
      case "sm":
        return "lead-sm";
      case "md":
        return "lead-md";
      case "lg":
        return "lead";
      case "xl":
        return "lead-xl";
      default:
        return "";
    }
  };

  taregtEL.className = [headingClass(), mode()].join(" ").trim();

  return taregtEL;
};
