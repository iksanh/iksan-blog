import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./navbar.style.scss";
import Logo from "../../img/logo.png";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo Blog" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>TECHNOLOGI</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?cat=desaign">
            <h6>DESAIGN</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          <span>Iksan</span>
          <span>Logout</span>
          <Link className="write" to="/write">
            <h6>write</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
