export const createHyperPay = () => {
  const hyperpayEl = document.createElement("div");
  hyperpayEl.id = "hyperpay-init";
  //hyperpayEl.innerText = "Hyperpay Element";

  hyperpayEl.insertAdjacentHTML(
    "beforeend",
    '<form action="https://absher.sa" class="paymentWidgets" data-brands="AMEX MADA MASTER VISA">Hyper Pay Widget</form>'
  );

  return hyperpayEl;
};
