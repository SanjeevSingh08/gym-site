import React, { useState } from "react";
import "./Testimonials.scss";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";
import { testimonialsData } from "../../data/testimonialsData";


const Testimonials = () => {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = useState(0);
  const tlength = testimonialsData.length;
  return (
    <>
   <div className="testi-section">
    <h1 className="testi-text"><span className="stroke-text">Test</span>imonials</h1>
    <div className="Testimonials">
    <div className="blur hero-blur"></div>
      
      <div className="left-t">
        
     <span><span className="stroke-text">What they</span> say about us </span>
       
        <motion.span
         key={selected}
         initial={{ opacity: 0, x: -100 }}
         animate={{opacity:1,x:0}}
         exit={{opacity:1,x:100}}
       transition={transition}
        >{testimonialsData[selected].review}</motion.span>
        <span className="detail">
          <span className="name">{testimonialsData[selected].name}</span> - &nbsp;
           {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <div></div>
          {/*initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
  whileInView={{ opacity: 1, x: 0 }}*/}
      
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{opacity:1,x:0}}
          exit={{opacity:1,x:-100}}
        transition={transition}
          src={testimonialsData[selected].image}
          alt=""
        />
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(tlength - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() => {
              selected === tlength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Testimonials;
