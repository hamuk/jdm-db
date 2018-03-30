import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Tabs = ({ className, children }) => (
  <div className={className}>{children}</div>
);

export default styled(Tabs)`
  display: block;
  width: 100%;
  margin: 10px 0px;
`;
