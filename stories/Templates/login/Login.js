import { createButton } from "../../components/button/Button";
import { createInput } from "../../components/forms/input/Input";
import { createTextElement } from "../../components/textElement/TextElement";
import "./login.css";

export const createLogin = ({
  primaryBtnLbl = "Login",
  secondaryBtnLbl = "Signup",
  forgotPassword = true,
}) => {
  //wrapper
  const loginWrapper = document.createElement("div");
  loginWrapper.className = "absher-auth-form";
  loginWrapper.innerHTML = "<h3>Welcome to Login</h3>";

  //append input & button
  loginWrapper.appendChild(
    createInput({
      label: true,
      labelText: "Username",
      size: "large",
      placeholder: "Enter fullname",
    })
  );
  loginWrapper.appendChild(
    createInput({
      type: "password",
      size: "large",
      label: true,
      labelText: "Password",
      placeholder: "Enter Password",
    })
  );

  if (forgotPassword) {
    loginWrapper.appendChild(
      createTextElement({ content: "Forgot Password?" })
    );
  }

  loginWrapper.appendChild(createButton({ label: primaryBtnLbl, block: true }));
  loginWrapper.appendChild(
    createButton({ label: secondaryBtnLbl, type: "secondary", block: true })
  );

  return loginWrapper;
};
