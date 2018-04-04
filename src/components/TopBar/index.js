import React from "react";
import styled from "styled-components";

import { constants } from "../../styles";

const TopBar = ({ className, children }) => (
  <header className={className}>{children}</header>
);

export default styled(TopBar)`
  display: block;
  background: #fff;
  padding: 20px 10px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;

  height: ${constants.topBarHeight};
  z-index: 1000;

  box-shadow: 0px 5px 5px 0 #d9d9d9;
`;
