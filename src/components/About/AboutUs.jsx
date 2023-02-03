import React from "react";

import icon1 from "../../assets/bicon1.png";
import icon2 from "../../assets/bicon4.png";
import icon3 from "../../assets/bicon5.png";
import icon4 from '../../assets/w-gym.png'
import { motion } from "framer-motion";
import "./AboutUs.scss";
import Reasons from "../Reasons/Reasons";
import hero_image_back from "../../assets/hero_image_back.png";
import Poster from "../Poster/Poster";



const AboutUs = () => {
  const transition = { type: "spring", duration: 3 };

  return (
    <>
 
 <Poster name="aboutus" head="About Us"/>
      
      <div className="About-Us">
       

        <div className="about-content">
          <div className="left-a">
            <h2>Achieving Your Fitness Goals:</h2>

            <p>
              We are definitely NOT some casual corporate fitness club, and
              we’re damn proud of it!
              <br />
             
              Our mission is to provide a positive and effective environment for
              everyone to train in, whether beginner or pro! We designed this
              gym around the premise that great people deserve a real gym that
              takes their training lifestyle seriously and gives them the tools
              and the atmosphere they need to crush their goals. We are not
              concerned with being the biggest or fanciest, only with being the
              absolute best for our members!
  
             
            </p>
            <div className="icons">
              <div className="icons-img" >
                <img src={icon1} alt="" />
                <p>BODY BUILDING </p>
              </div>
              <div className="icons-img">
                <img src={icon2} alt="" />
                <p>PERSONAL TRAINERS</p>
              </div>
              <div className="icons-img">
                <img src={icon3} alt="" />
                <p>MODERN EQUIPMENTS</p>
              </div>
            </div>
            <div className="blur about-blur"></div>
            <div className="blur about-blur"></div>
            <button className="btn">Contact Us</button>
          </div>
          <motion.div className="right-a"
        initial={{ x: 80, y: 0 }}
            animate={{ x: 0, y: 0 }}
          transition={transition}>
            <div className="design">
            
            </div>
            <img className="girl" src={icon4} alt="" />
            <img className="icon-back blue-color"  src={hero_image_back} alt="" />
          </motion.div>
          
        </div>
      </div>

  <Reasons/>

    </>
  );
};

export default AboutUs;
