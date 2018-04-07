import React from "react";
import { Helmet } from "react-helmet";

import HeroBanner from "../../components/HeroBanner";
import CardGrid from "../../components/CardGrid";
import Card from "../../components/Card";

const Home = () => (
  <div>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <HeroBanner />
    <h1>Latest</h1>
    <CardGrid>
      <Card content="hey" footer="yo" />
      <Card content="hey" footer="yo" />
      <Card content="hey" footer="yo" />
      <Card content="hey" footer="yo" />
      <Card content="hey" footer="yo" />
      <Card content="hey" footer="yo" />
      <Card content="hey" footer="yo" />
      <Card content="hey" footer="yo" />
      <Card content="hey" footer="yo" />
      <Card content="hey" footer="yo" />
      <Card content="hey" footer="yo" />
      <Card content="hey" footer="yo" />
      <Card content="hey" footer="yo" />
      <Card content="hey" footer="yo" />
    </CardGrid>
  </div>
);

export default Home;
