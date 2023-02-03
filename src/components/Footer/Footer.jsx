import React from 'react'
import "./Footer.scss";



import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';
import whatsapp1 from "../../assets/whatsapp1.png"
import Instagram1 from "../../assets/instagram1.png"
import facebook1 from "../../assets/facebook1.png"

const Footer = () => {

  return (
 
   <div className="footer-container">
     <hr />
    
    {/*<div className="footer">
      <div className="social-links">
      <img src={Github} alt="" />
      <img src={Instagram} alt="" />
      <img src={LinkedIn} alt="" />
      </div>
   
    <div className="logo-f">
      <img src={logo} alt=""></img>
    </div>
   </div>*/}
    
   <div className="footer-div">
   
    <div className="footer-content">
    <div className="logo-f">
      <img src={logo} alt=""></img>
    </div>
    <p>We are the best Gym is howrah and we provide excellent coaches.</p>
   
    </div>
    <div className="footer-content">
      <h4>CONTACT US</h4>
     
      <p>📍<a href=" https://goo.gl/maps/8rEnwBWD1M2hzqig9">35, Dr Abani Dutta Road Howrah-06</a></p>
      <p>📍 <a href="https://goo.gl/maps/vxFtKzEvsjMRiA5SA">493, C/A, G.T Road Howrah (Shibpur)</a></p>
      <p>📞Call us: <a href="tel:+91-9830265429">9830265429</a>, <a href="tel:+91-9830371007">9830371007</a></p>
      <p>✉ Email: vigourthefitnesssstudio@gmail.com</p>
      

      <div className="social-media">
        <h4>SOCIAL MEDIA</h4>
        <div className="social-links">
      <img src={whatsapp1} alt="" />
      <a href="https://www.facebook.com/vigourgymhowrah004/"><img src={facebook1} alt="" /></a>
      <a href=" https://www.instagram.com/vigourthefitness/?next=%2Fexplore%2Flocations%2F1022282954%2Fvigour-the-fitness-studio%2F"><img src={Instagram1} alt="" /></a>
      </div>
      </div>
    </div>
    <div className="footer-content">
      <h4>USEFUL LINKS</h4>
      <ul >
        <Link to="/">
          <li>⚙️ Home</li>
        </Link>
        <Link to="/about-us">
          <li>⚙️ About Us</li>
        </Link>
        <Link to="/gallery">
          {" "}
          <li>⚙️ Gallery</li>
        </Link>
        <Link to="/plans">
          {" "}
          <li>⚙️ Plans</li>
        </Link>
        <Link to="/contact-us">
          <li>⚙️ Contact Us</li>
        </Link>
      </ul>
    </div>
   </div>
   <div className="blur blur-f-1"></div>
   <div className="blur blur-f-2"></div>
   <div className="copyright">
    <div className="c-content">

   <p>Copyright © 2023 Vigour The fitness Studio - All Rights Reserved. </p>
   </div>
   </div>
   </div>
  )
}

export default Footer
