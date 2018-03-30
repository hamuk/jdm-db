import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Tab = ({ className, children, to, exact }) => (
  <NavLink to={to} className={className} exact={exact}>
    {children}
  </NavLink>
);

export default styled(Tab)`
  display: inline-block;
  margin: 0 5px 0 0;
  text-decoration: none;
  color: #555;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: #000;
  }
`;
