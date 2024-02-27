import { createDataTablePage } from "./DatatableComp";

//data table modules
import DataTable from "datatables.net-dt";
//import "datatables.net-responsive-dt";

export default {
  title: "Pages/Data Table",
  // tags: ["autodocs"],
  render: ({ ...args }) => createDataTablePage({ ...args }),
  loaders: [
    async () => {
      document.addEventListener("DOMContentLoaded", () => {
        table?.destroy();

        let table = new DataTable("#dataTable", {
          responsive: true,
        });
      });
    },
  ],
};

export const Default = {
  play: async () => {},
};
