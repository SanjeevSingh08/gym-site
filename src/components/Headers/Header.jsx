import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header header-visible">
      <Link to="/">
        <img className="logo2" src={logo} alt="" />
      </Link>
      <ul className="header-menu header-visibility">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about-us">
          <li>About Us</li>
        </Link>
        <Link to="/gallery">
          {" "}
          <li>Gallery</li>
        </Link>
        <Link to="/plans">
          {" "}
          <li>Plans</li>
        </Link>
        <Link to="/contact-us">
          <li>Contact Us</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
