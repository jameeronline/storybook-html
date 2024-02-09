import { createButton } from "../../components/button/Button";
import { createInput } from "../../components/forms/input/Input";
import { createCheckbox } from "../../Components/forms/checkbox/Checkbox";

export const createSignUp = ({
  primaryBtnLbl = "Login",
  secondaryBtnLbl = "Signup",
  confirmPassword,
}) => {
  const signupWrapper = document.createElement("div");
  signupWrapper.className = "absher-auth-form";
  signupWrapper.innerHTML = "<h3>Welcome to Signup</h3>";

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
      labelText: "Email",
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

  if (confirmPassword) {
    signupWrapper.appendChild(
      createInput({
        type: "password",
        label: true,
        labelText: "Confirm Password",
        placeholder: "Confirm Password",
      })
    );
  }

  signupWrapper.appendChild(
    createButton({ label: primaryBtnLbl, block: true })
  );
  signupWrapper.appendChild(
    createButton({ label: secondaryBtnLbl, type: "secondary", block: true })
  );

  return signupWrapper;
};
