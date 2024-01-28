import { createButton } from "../../Components/button/Button";
import { createInput } from "../../Components/Forms/input/Input";
import { createTextElement } from "../../textElement/TextElement";

export const createLogin = ({
  primaryBtnLbl = "Login",
  secondaryBtnLbl = "Signup",
}) => {
  //wrapper
  const loginWrapper = document.createElement("div");
  loginWrapper.className = "absher-login-form";

  const loginHeader = document.createElement("h3");
  loginHeader.innerHTML = "<h2>Welcome to Login</h2>";

  loginWrapper.appendChild(loginHeader);

  //append input & button
  loginWrapper.appendChild(
    createInput({
      label: true,
      labelText: "Username",
      placeholder: "Enter fullname",
    })
  );
  loginWrapper.appendChild(
    createInput({
      type: "password",
      label: true,
      labelText: "Password",
      placeholder: "Enter Password",
    })
  );

  loginWrapper.appendChild(createTextElement({ content: "Forgot Password?" }));

  loginWrapper.appendChild(createButton({ label: primaryBtnLbl, block: true }));
  loginWrapper.appendChild(
    createButton({ label: secondaryBtnLbl, type: "Secondary", block: true })
  );

  return loginWrapper;
};
