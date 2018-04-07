import React from "react";
import styled from "styled-components";

const PageContent = ({ className, children }) => (
  <main role="main" className={className}>
    {children}
  </main>
);

export default styled(PageContent)`
  padding: 20px 10px;
  width: 100%;
  flex: 1;
`;
