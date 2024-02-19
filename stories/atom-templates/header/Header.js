import "./header.css";
import { createButton } from "../../atom-components/button/Button";

export const createHeader = ({ user, onLogout, onLogin, onCreateAccount }) => {
  const header = document.createElement("header");

  const wrapper = document.createElement("div");
  wrapper.className = "storybook-header";

  const logo = `<div class="storybook-logo">
    <svg xmlns="http://www.w3.org/2000/svg" class="absher-logo" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" style="enable-background:new 0 0 411.5 316.4;" xml:space="preserve" viewBox="136.39 67.25 131.81 196.45">
    <style type="text/css">
    .st0 {
        fill-rule: evenodd;
        clip-rule: evenodd;
        fill: #0E9346;
    }
    </style>
    <g>
        <path class="st0" d="M268.2,88.8c0,0.7,0,1.3,0,1.9c0,47.4,0,94.7,0,142.1c0,3.7-1.3,5.7-4.9,6.1c-3.4,0.4-6.9,0.1-10.5,0.1   c0-0.6,0-1.2,0-1.8c0-47.3,0-94.6,0-142c0-3.9,1.4-5.9,5.1-6.3C261.2,88.5,264.7,88.8,268.2,88.8z"/>
        <path class="st0" d="M151.7,127.5c0,0.9,0,1.6,0,2.2c0,42.4,0,84.8,0,127.2c0,4.5-1.9,6.5-6.4,6.7c-2.5,0.1-5,0-7.5,0.1   c-1,0-1.5-0.4-1.4-1.4c0-0.5,0-1,0-1.5c0-41.8,0-83.7,0-125.5c0-5.4,1.5-7.5,7.8-7.7C146.5,127.4,149,127.5,151.7,127.5z"/>
        <path class="st0" d="M244.7,103c0,0.8,0.1,1.5,0.1,2.2c0,42.4,0,84.8,0,127.2c0,4.6-1.9,6.6-6.6,6.8c-2.4,0.1-4.9,0-7.3,0.1   c-1.1,0-1.5-0.4-1.4-1.5c0.1-0.8,0-1.7,0-2.6c0-41.6,0-83.2,0-124.9c0-5.1,1.6-7,6.8-7.3C239,102.9,241.7,103,244.7,103z"/>
        <path class="st0" d="M198.4,127.6c0,0.9,0,1.6,0,2.2c0,34.1,0,68.3,0,102.4c0,4.7-1.9,6.7-6.6,6.9c-2.7,0.1-5.3,0-8,0   c-0.2,0-0.4-0.1-0.8-0.2c0-0.7,0-1.4,0-2.2c0-34,0-67.9,0-101.9c0-5,1.4-6.7,6.3-7.3C192.1,127.3,195.1,127.6,198.4,127.6z"/>
        <path class="st0" d="M221.6,127.5c0,0.8,0,1.5,0,2.1c0,34.4,0,68.7,0,103.1c0,4.3-1.9,6.3-6.3,6.5c-2.6,0.1-5.1,0-7.7,0.1   c-1,0-1.5-0.4-1.4-1.4c0-0.5,0-1,0-1.5c0-33.6,0-67.2,0-100.8c0-5.3,1.1-7.7,8-7.9C216.5,127.5,218.9,127.5,221.6,127.5z"/>
        <path class="st0" d="M159.7,239.2c0-1,0-1.8,0-2.6c0-34,0-67.9,0-101.9c0-4.9,1.2-6.5,6.1-7.1c3-0.3,6-0.1,9.1-0.1   c0,0.7,0.1,1.4,0.1,2c0,34.3,0,68.6,0,102.9c0,4.5-1.9,6.5-6.3,6.6C165.8,239.2,162.9,239.2,159.7,239.2z"/>
        <path class="st0" d="M167.3,118.9c-4.4,0-7.9-3.5-7.9-7.8c0-4.4,3.6-8.1,8-8c4.4,0,7.9,3.6,7.9,8.1   C175.2,115.5,171.8,118.9,167.3,118.9z"/>
        <path class="st0" d="M213.9,118.9c-4.5,0-7.9-3.4-7.9-8c0-4.4,3.6-7.9,7.9-7.9c4.4,0,8,3.7,7.9,8.1   C221.8,115.4,218.3,118.9,213.9,118.9z"/>
        <path class="st0" d="M190.6,118.9c-4.4,0-7.9-3.4-8-7.8c0-4.4,3.6-8.1,8-8c4.4,0,8,3.7,7.9,8.1C198.5,115.5,195,118.9,190.6,118.9z   "/>
        <path class="st0" d="M244.7,253.6c0,4.3-3.6,7.9-7.9,7.9c-4.4,0-8-3.6-8-8c0-4.4,3.5-7.8,7.9-7.8   C241.3,245.7,244.7,249.1,244.7,253.6z"/>
        <path class="st0" d="M268.1,82.3c-5.1,0-10.1,0-15.1,0c-1-7.4,7.4-15.8,15.1-15C268.1,72.2,268.1,77.1,268.1,82.3z"/>
    </g>
    </svg>
  </div>`;

  wrapper.insertAdjacentHTML("afterbegin", logo);

  const account = document.createElement("div");
  if (user) {
    const welcomeMessage = `<span class="welcome">Welcome, <b>${user.name}</b>!</span>`;
    account.innerHTML = welcomeMessage;
    account.appendChild(
      createButton({
        label: "Log out",
        type: "secondary",
        onClick: onLogout,
      })
    );
  } else {
    account.appendChild(
      createButton({
        label: "Log in",
        type: "primary",
        onClick: onLogin,
      })
    );
    account.appendChild(
      createButton({
        label: "Sign up",
        type: "secondary",
        onClick: onCreateAccount,
      })
    );
  }
  wrapper.appendChild(account);
  header.appendChild(wrapper);

  return header;
};
