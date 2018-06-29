import React from "react";
import styled from "styled-components";

const Searchbox = ({ className }) => (
  <input type="text" className={className} placeholder="Search" />
);

export default styled(Searchbox)`
  display: block;
  width: 100%;
`;
