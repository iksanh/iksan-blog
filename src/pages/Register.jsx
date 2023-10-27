import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import "./login.style.scss";

const Register = (props) => {
  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUserInput((user) => ({ ...user, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/register", userInput);
      navigate("/login");
    } catch (error) {
      setError(error.response.data);
    }
  };

  console.log(userInput);
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Register
        </button>
        {error && <p>{error}</p>}
        <span>
          do you have account ? <Link to="/register">Login</Link>
        </span>
      </form>
    </div>
  );
};

Register.propTypes = {};

export default Register;
