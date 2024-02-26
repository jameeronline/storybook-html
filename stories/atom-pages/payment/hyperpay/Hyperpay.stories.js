import { createHyperPay } from "./Hyperpay";

export default {
  title: "Payment/Hyperpay",
  tags: ["autodocs"],
  render: () => createHyperPay(),
};

export const Default = {
  // loaders: [
  //   async () => {
  //     var wpwlOptions = { style: "card" };
  //     document.addEventListener("DOMContentLoaded", () => {
  //       document
  //         .getElementById("hyperpay-init")
  //         .insertAdjacentHTML(
  //           "beforeend",
  //           '<form action="https://absher.sa" class="paymentWidgets" data-brands="AMEX MADA MASTER VISA">payment</form>'
  //         );
  //       console.log(document.getElementById("hyperpay-init"));
  //     });
  //   },
  // ],
  play: async () => {
    var wpwlOptions = { style: "card" };
    document.addEventListener("DOMContentLoaded", () => {
      document
        .getElementById("hyperpay-init")
        .insertAdjacentHTML(
          "beforeend",
          '<form action="https://absher.sa" class="paymentWidgets" data-brands="AMEX MADA MASTER VISA">payment</form>'
        );
      console.log(document.getElementById("hyperpay-init"));
    });
  },
};
