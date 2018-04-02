import React from "react";

import HeroBanner from "../../components/HeroBanner";
import Card from "../../components/Card";

const Home = () => (
  <div style={{ background: "#e6e8e6", padding: "20px 5px" }}>
    {/* <HeroBanner /> */}
    <h1>Latest</h1>
    <div>
      <Card content="hey" footer="yo" />
      <Card content="hey" footer="yo" />
      <Card content="hey" footer="yo" />
      <Card content="hey" footer="yo" />
      <Card content="hey" footer="yo" />
      <Card content="hey" footer="yo" />
    </div>
  </div>
);

export default Home;
