import React from "react";
import styled from "styled-components";

import { constants } from "../../styles";

const PageContent = ({ className, children }) => (
  <main role="main" className={className}>
    {children}
  </main>
);

export default styled(PageContent)`
  padding: 20px 10px;
  width: 100%;
  margin-top: ${constants.topBarHeight};
  flex: 1;
`;
