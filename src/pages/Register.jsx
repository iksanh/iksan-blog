import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./login.style.scss";

const Register = (props) => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="password" />
        <button type="submit">Register</button>
        <p>This is an error</p>
        <span>
          do you have account ? <Link to="/register">Login</Link>
        </span>
      </form>
    </div>
  );
};

Register.propTypes = {};

export default Register;
