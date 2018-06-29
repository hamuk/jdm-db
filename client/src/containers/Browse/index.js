import React from "react";
import { Helmet } from "react-helmet";

import BrowseListCategory from "../../components/BrowseListCategory";

const categories = [
  {
    name: "Subaru",
    items: [{ name: "Impreza" }, { name: "Legacy" }, { name: "BRZ" }]
  },
  {
    name: "Mazda",
    items: [{ name: "Roadster" }, { name: "RX8" }, { name: "RX7" }]
  }
];

const Browse = () => (
  <div>
    <Helmet>
      <title>Browse</title>
    </Helmet>

    {categories.map(c => <BrowseListCategory category={c} />)}
  </div>
);

export default Browse;
