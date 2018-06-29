import React from "react";
import styled from "styled-components";

import banner from "./banner.jpg";

import OutlineButton from "../../components/OutlineButton";

const HeroBanner = ({ className }) => (
  <div className={className}>
    <h1>Welcome to JDM-DB!</h1>
    <p>The #1 database for all things JDM</p>

    <OutlineButton to="/browse" />
  </div>
);

export default styled(HeroBanner)`
  display: flex;
  height: 500px;
  margin: 0 0 25px 0;
  background: #ccc;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  color: #fff;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  > h1,
  p {
    margin: 0;
    text-shadow: 2px 2px 3px #000;
  }
`;
