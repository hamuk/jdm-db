import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Button, LinkButton } from "../../components/Button";

import logo from "./logo.svg";

const LoginLink = styled(Link)`
  color: #fff;
  margin-right: 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: #fff;
  }
`;

const LoggedOutButtons = ({ className }) => (
  <div className={className}>
    <LoginLink to="/login">Login</LoginLink>
    <LinkButton to="/register">Register</LinkButton>
  </div>
);

const StyledLoggedOutButtons = styled(LoggedOutButtons)`
  margin-left: auto;
`;

const LoggedInButton = ({ className, user, onLogout }) => (
  <div className={className}>
    <Button onClick={onLogout}>
      <i class="fas fa-user" /> {user.name}
    </Button>
  </div>
);

const StyledLoggedInButton = styled(LoggedInButton)`
  margin-left: auto;
`;

const BannerLogo = ({ className }) => (
  <Link to="/" className={className}>
    <img src={logo} alt="logo" />
    <span>JDM-DB</span>
  </Link>
);

const StyledBannerLogo = styled(BannerLogo)`
  color: #fff;
  text-decoration: none;
  font-size: 26px;
  display: flex;
  flex-flow: row;
  align-items: center;
  font-weight: 900;
  user-select: none;

  &:visited {
    color: #fff;
  }

  > img {
    height: 50px;
    margin-right: 10px;
  }
`;

const Banner = ({ className, user, onLogout }) => (
  <div className={className}>
    <StyledBannerLogo />
    {!user && <StyledLoggedOutButtons />}
    {user && <StyledLoggedInButton user={user} onLogout={onLogout} />}
  </div>
);

export default styled(Banner)`
  display: block;
  margin-top: -20px;
  margin-bottom: 10px;
  margin-left: -10px;
  margin-right: -10px;
  background: #012a36;
  color: #fff;

  padding: 15px 10px;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-start;
`;
