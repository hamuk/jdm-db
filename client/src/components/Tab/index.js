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
  color: #29274c;

  &:hover {
    color: #7e52a0;
  }

  &.active {
    color: #7e52a0;
    border-bottom: 2px solid #7e52a0;
  }
`;
