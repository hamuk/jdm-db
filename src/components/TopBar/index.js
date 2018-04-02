import React from "react";
import styled from "styled-components";

const TopBar = ({ className, children }) => (
  <div className={className}>{children}</div>
);

export default styled(TopBar)`
  display: block;
  width: 100%;
  background: #fb6107;
  margin: 0 0 10px 0;
  padding: 20px 10px;
`;
