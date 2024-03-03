import { createElement } from "react";

import Hyperpay from "../../../assets/hyperpay.png";

export const createHyperPay = () => {
  const hyperpayEl = document.createElement("div");
  hyperpayEl.id = "hyperpay-init";
  //hyperpayEl.innerText = "Hyperpay Element";

  const hyperpayForm = document.createElement("form");
  hyperpayForm.className = "paymentWidgets";
  hyperpayForm.setAttribute("data-brands", "AMEX MADA MASTER VISA");
  hyperpayForm.innerText = "Payment Widget";

  // hyperpayEl.insertAdjacentHTML(
  //   "beforeend",
  //   '<form action="https://absher.sa" class="paymentWidgets" data-brands="AMEX MADA MASTER VISA">Hyper Pay Widget</form>'
  // );

  hyperpayEl.insertAdjacentElement("beforeend", hyperpayForm);

  return hyperpayEl;
};
