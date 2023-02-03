import React from "react";
import "./Reasons.scss";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

import tick from "../../assets/tick.png";




const Reasons = () => {
  return (
    <>
   
    <div className="Reasons" id="reasons">
   
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span className="stroke-text small">why</span>
          <span className="small"> choose us?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>Wide range of fitness classes</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Quality equipment</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Affordable pricing</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Personal training options</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Convenient location & hours</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Clean facilities & Experienced Staffs</span>
          </div>
        </div>
       
        
      </div>
    </div>
    </>
  );
};

export default Reasons;
