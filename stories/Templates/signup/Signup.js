import { createButton } from "../../Components/button/Button";
import { createInput } from "../../Components/Forms/input/Input";
import { createCheckbox } from "../../Components/forms/checkbox/Checkbox";

export const createSignUp = ({
  primaryBtnLbl = "Login",
  secondaryBtnLbl = "Signup",
}) => {
  const signupWrapper = document.createElement("div");
  signupWrapper.className = "absher-signup-form";
  signupWrapper.innerHTML = "<h2>Welcome to Signup</h2>";

  //append input & button
  signupWrapper.appendChild(
    createInput({
      label: true,
      labelText: "Username",
      placeholder: "Enter fullname",
    })
  );
  signupWrapper.appendChild(
    createInput({
      type: "email",
      label: true,
      labelText: "email",
      placeholder: "Enter Email",
    })
  );
  signupWrapper.appendChild(
    createInput({
      type: "password",
      label: true,
      labelText: "Password",
      placeholder: "Enter Password",
    })
  );
  signupWrapper.appendChild(
    createInput({
      type: "password",
      label: true,
      labelText: "Confirm Password",
      placeholder: "Confirm Password",
    })
  );

  signupWrapper.appendChild(
    createButton({ label: primaryBtnLbl, block: true })
  );
  signupWrapper.appendChild(
    createButton({ label: secondaryBtnLbl, type: "Link", block: true })
  );

  return signupWrapper;
};
