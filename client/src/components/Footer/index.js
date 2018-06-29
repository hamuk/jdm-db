import React from "react";
import styled from "styled-components";

const Footer = ({ className, children }) => (
  <footer className={className}>
    <p>
      <a href="/">jdm-db.com</a> is open source! Contribute on{" "}
      <a href="https://github.com/hamuk/jdm-db">GitHub!</a>
    </p>
  </footer>
);

export default styled(Footer)`
  padding: 0 15px;
  width: 100%;
  background: #29274c;
  color: #fff;
  text-align: center;

  a {
    color: #fff;

    &:visited {
      color: #fff;
    }
  }
`;
