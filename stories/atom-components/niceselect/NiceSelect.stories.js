import { createNiceSelect } from "./NiceSelect";

import AirDatepicker from "air-datepicker";
import localeEn from "air-datepicker/locale/en";
import "air-datepicker/air-datepicker.css";

export default {
  title: "Components/Nice Select",
  tags: ["autodocs"],
  render: () => createNiceSelect(),
  loaders: [
    async () => {
      document.addEventListener("DOMContentLoaded", () => {
        new AirDatepicker("#my-date", {
          locale: localeEn,
          selectedDates: [new Date()],
          timepicker: true,
          timeFormat: "hh:mm AA",
        });
      });
    },
  ],
};

export const Default = {};
