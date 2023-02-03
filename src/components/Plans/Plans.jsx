import React from "react";
import "./Plans.scss";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

import { Link } from "react-router-dom";

const Plans = () => {
  return (
    <>
      <div className="plans-container">
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="programs-header">
          <span className="stroke-text">READY TO START</span>
          <span>YOUR JOURNEY</span>
          <span className="stroke-text">NOW WITH US</span>
        </div>
        {/*plans card*/}

        <div className="plans h">
          {plansData.map((plan, i) => (
            <div className="plan" key={plan.price}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>₹ {plan.price}</span>

              <div className="features">
                {plan.features.map((feature, j) => (
                  <div className="feature" key={j}>
                    <img src={whiteTick} alt="" />
                    <span key={j}>{feature}</span>
                  </div>
                ))}
              </div>
             
              <button className="btn"><Link to="/contact-us">Join Now</Link></button>
            </div>
          ))}
        </div>
      </div>
    
    </>
  );
};

export default Plans;
