import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

import "./Head.scss";
const Head = () => {
  const [isChecked, setIsChecked] = React.useState(false)

const handleChange = (event) => {
setIsChecked(event.target.checked)
}

  return (
    <div className="head head-visible">
      <div className="blur hero-blur"></div>
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
      <ul className={` ${!isChecked ? 'head-menu head-visibility' : 'menu head-visibility'}`}>
        <Link to="/" onClick={() => setIsChecked(false)}>
          <li>Home</li>
        </Link>
        <Link onClick={() => setIsChecked(false)} to="/about-us">
          <li >About Us</li>
        </Link>
        <Link onClick={() => setIsChecked(false)} to="/gallery">
          {" "}
          <li>Gallery</li>
        </Link >
        <Link onClick={() => setIsChecked(false)} to="/plans">
          {" "}
          <li>Plans</li>
        </Link>
        <Link onClick={() => setIsChecked(false)} to="/contact-us">
          {" "}
          <li>Contact Us</li>
        </Link>
      </ul>
      <div className={` ${!isChecked ? 'hamburger' : 'hm'}`}>
        <input type="checkbox" onChange={handleChange} id="overlay-input"
       checked={isChecked}/>
        <label htmlFor="overlay-input" id="overlay-button">
          <span></span>
        </label>
      </div>
      <div className="blur head-blur"></div>
    </div>
  );
};

export default Head;
