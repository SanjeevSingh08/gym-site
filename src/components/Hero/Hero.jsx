import React from "react";
import { useMedia } from "react-use";
import Testimonials from "../Testimonial/Testimonials";
import Header from "../Headers/Header";
import "./Hero.scss";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import Programs from "../Programs/Programs";
import { Link } from "react-router-dom";
import GalleryCarousel from "../Gallery/GalleryCorousel";
import Head from "../Head/Head";
import Rules from "../Rules/Rules";


const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const isSmallScreen = useMedia("(max-width: 1170px)");
  const mobile = window.innerWidth <= 768 ? true : false;
  const mobile2 = window.innerWidth <= 1140 ? true : false;
  return (
    <>
      <div className="hero">
        <div className="blur hero-blur"></div>
        <div className="left-h">
          {mobile2 ? <Head /> : <Header />}
          {/*the best add*/}
          <div className="the-best-ad">
            <motion.div
              initial={{ left: mobile ? "164px" : "220px" }}
              whileInView={{ left: "8px" }}
              transition={{ ...transition, type: "tween" }}
            ></motion.div>
            <span>The best fitness gym in Howrah</span>
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
                Achieve your fitness goals at the best gym in{" "}
                <strong>Howrah</strong>. Top equipment and certified trainers.
                Join now and unleash your full potential.
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
            <button className="btn"><Link to='/plans'>Get Started</Link></button>
            <button className="btn"><Link to='/about-us'>Learn More</Link></button>
          </div>
        </div>

        <div className="right-h">
          <button className="btn join-now"><Link style={{color:"black"}} to='/contact-us'>Join Now</Link></button>
          <motion.div
            className="heart-rate"
            initial={{ right: "-1rem" }}
            whileInView={{ right: "2.5rem" }}
            transition={transition}
          >
            <img className="blue-color" src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </motion.div>
          <div className="blur hero-blur-2"></div>

          {/*Hero images*/}
          <img src={hero_image} alt="" className="hero-image " />
          <motion.img
            initial={{ x: 0, y: 0 }}
            animate={{ x: 80, y: 0 }}
            transition={transition}
            src={hero_image_back}
            alt=""
            className="hero-image-back blue-color"
          />
          {/*calories*/}
          {isSmallScreen ? (
            <motion.div className="calories blue-color">
              <img className="blue-color" src={Calories} alt="" />
              <div>
                <span>Calories Burned</span>
                <span>220 Kcal</span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="calories"
              initial={{ x: 80, y: 0 }}
              animate={{ x: 0, y: 0 }}
              transition={transition}
            >
              <img className="blue-color" src={Calories} alt="" />
              <div>
                <span>Calories Burned</span>
                <span>220 Kcal</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <Programs />
      <GalleryCarousel />
      <Testimonials />
      <Rules/>
     
     
    </>
  );
};

export default Hero;
