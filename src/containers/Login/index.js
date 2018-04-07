import React from "react";
import { Helmet } from "react-helmet";

import { Button } from "../../components/Button";

const Login = ({ onLogin }) => (
  <div>
    <Helmet>
      <title>Login</title>
    </Helmet>
    <h1>Login</h1>
    <Button onClick={onLogin}>Login</Button>
  </div>
);

export default Login;
