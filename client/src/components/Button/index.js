import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const btn = ({ className, children, ...rest }) => (
  <button className={className} {...rest}>
    {children}
  </button>
);

export const Button = styled(btn)`
  color: #fff;
  background: #7e52a0;
  border: 0;
  outline: 0;
  border-radius: 3px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background: #d295bf;
  }
`;

export const LinkButton = styled(Link)`
  color: #fff;
  background: #7e52a0;
  border: 0;
  outline: 0;
  border-radius: 3px;
  text-decoration: none;
  padding: 5px 10px;

  &:hover {
    background: #d295bf;
  }

  &:visited {
    color: #fff;
  }
`;
