import React from "react";
import styled from "styled-components";
import { media } from "../../styles";

const PageContent = ({ className, children }) => (
  <main role="main" className={className}>
    {children}
  </main>
);

export default styled(PageContent)`
padding: 1rem 15px;
margin-right: auto;
margin-left: auto;

${media.tablet`width: 750px;`}
${media.desktop`width: 970px;`}
${media.giant`width: 1170px;`}
`;
