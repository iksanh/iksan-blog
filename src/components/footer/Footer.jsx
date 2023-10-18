import React from "react";
import PropTypes from "prop-types";
import "./footer.style.scss";
import Logo from "../../img/logo.png";

const Footer = (props) => {
  return (
    <footer>
      <img src={Logo} alt="Logo Blog" />
      <span>
        Made with 💗 and <b>React JS</b>
      </span>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
