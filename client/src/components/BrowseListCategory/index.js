import React from "react";
import styled from "styled-components";

const BrowseListCategory = ({ className, category }) => (
  <div className={className}>
    <h1>{category.name}</h1>
    <ul>{category.items.map(i => <li>{i.name}</li>)}</ul>
  </div>
);

export default styled(BrowseListCategory)`
  > ul {
    padding: 0;
    margin-bottom: 1rem;
    list-style: none;
  }

  > h1 {
  }
`;
