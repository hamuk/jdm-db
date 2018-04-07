import React from "react";
import styled from "styled-components";

const TopBar = ({ className, children }) => (
  <header className={className}>{children}</header>
);

export default styled(TopBar)`
  display: block;
  background: #fff;
  padding: 20px 10px;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;

  box-shadow: 0px 3px 5px 0 rgba(0, 0, 0, 0.5);
`;
