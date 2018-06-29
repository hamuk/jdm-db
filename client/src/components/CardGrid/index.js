import React from "react";
import styled from "styled-components";

const CardGrid = ({ className, children }) => (
  <div className={className}>{children}</div>
);

export default styled(CardGrid)`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1rem;
`;
