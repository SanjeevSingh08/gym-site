import React from "react";
import { useMedia } from 'react-use'

import Header from "../Headers/Header";
import "./Hero.scss";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const isSmallScreen = useMedia("(max-width: 1170px)");
  const mobile=window.innerWidth<=768?true:false;
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/*the best add*/}
        <div className="the-best-ad">
          <motion.div
            initial={{ left:mobile?"178px":"238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>
        {/*Hero Heading*/}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div className="span-text">
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/*Figures*/}
        <div className="figures">
          <div>
            <span>+ 140</span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span>+ 978</span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>+ 50</span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn join-now">Join Now</button>
        <motion.div
          className="heart-rate"
          initial={{ right: "-1rem" }}
          whileInView={{ right: "2.5rem" }}
          transition={transition}
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
         
        </motion.div>
        <div className="blur hero-blur-2"></div>

        {/*Hero images*/}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ x:0,y:0}}
        animate={{x:80,y:0}}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />
        {/*calories*/}
        {isSmallScreen ? (
             <motion.div
             className="calories"
         
           >
             <img src={Calories} alt="" />
             <div>
               <span>Calories Burned</span>
               <span>220 Kcal</span>
             </div>
           </motion.div>
        ) : (
          <motion.div
            className="calories"
            initial={{ right: "37rem" }}
            whileInView={{ right: "28rem" }}
            transition={transition}
          >
            <img src={Calories} alt="" />
            <div>
              <span>Calories Burned</span>
              <span>220 Kcal</span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Hero;