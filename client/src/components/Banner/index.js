import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "./logo.svg";

const BannerLogo = ({ className }) => (
  <Link to="/" className={className}>
    <img src={logo} alt="logo" />
    <span>JDM-DB</span>
  </Link>
);

const StyledBannerLogo = styled(BannerLogo)`
  color: #fff;
  text-decoration: none;
  font-size: 26px;
  display: flex;
  flex-flow: row;
  align-items: center;
  font-weight: 900;
  user-select: none;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  &:visited {
    color: #fff;
  }

  > img {
    height: 50px;
    margin-right: 10px;
  }
`;

const Banner = ({ className }) => (
  <div className={className}>
    <StyledBannerLogo />
  </div>
);

export default styled(Banner)`
  width: 100%;
  background: #012a36;
  color: #fff;

  padding: 15px 10px;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-start;
`;
