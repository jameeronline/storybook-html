import { createHyperPay } from "./Hyperpay";

export default {
  title: "Payment/Hyperpay",
  tags: ["autodocs"],
  render: () => createHyperPay(),
};

export const Default = {
  loaders: [
    async () => {
      var wpwlOptions = { style: "card" };
    },
  ],
};
