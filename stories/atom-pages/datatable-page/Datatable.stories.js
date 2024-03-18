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
        //table.destroy();

        let table = new DataTable("#dataTable", {
          responsive: true,
        });
      });
    },
  ],
  play: () => {},
  argTypes: {
    servieTitle: { control: "text" },
    // mainBtnLbl: ButtonStories.default.args.label,
    // subBtnLbl: ButtonStories.default.args.label,
  },
  args: {
    servieTitle: "Service Page - Data Table",
  },
};

export const Default = {};
