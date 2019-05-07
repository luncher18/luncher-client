import React from "react";
import PropTypes from "prop-types";

const Login = props => (
  <nav className="Login">
    <h2>Login</h2>
    <button className="Login" onClick={() => props.authenticate("Login")}>
      Login
    </button>
  </nav>
);

Login,
  (propTypes = {
    authenticate: PropTypes.func.isRequired
  });

export default Login;
