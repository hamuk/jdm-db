import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const OutlineButton = ({ className, to }) => (
  <Link className={className} to={to}>
    Start Browsing
  </Link>
);

export default styled(OutlineButton)`
  color: #fff;
  text-decoration: none;
  border: 1px solid #fff;
  padding: 5px 15px;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.3);
  font-weight: bold;
  margin: 15px 0 0 0;
  transition: background 0.3s ease-out;

  :hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;
