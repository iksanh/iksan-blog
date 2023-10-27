import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { APIURL } from "../services/config";
import { login } from "../services/apiAuth";
import "./login.style.scss";
import AuthContext, { useAuthContext } from "../contexts/AuthContext";

const Login = (props) => {
  let { loginUser, isToken, error, setError } = useAuthContext();
  const [userLogin, setUserLogin] = useState({
    username: "username",
    password: "password",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserLogin((user) => ({ ...userLogin, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isLoginValid = await loginUser(userLogin);

    if (isLoginValid) navigate("/");
  };

  useEffect(() => {
    if (isToken) navigate("/");
  });
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          onChange={handleChange}
          name="username"
        />
        <input
          required
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          login
        </button>
        {error && <p>{error}</p>}
        <span>
          dont have account ? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

Login.propTypes = {};

export default Login;
