import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./login.style.scss";

const Login = (props) => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="password" placeholder="password" />
        <button type="submit">login</button>
        <p>This is an error</p>
        <span>
          dont have account ? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

Login.propTypes = {};

export default Login;
