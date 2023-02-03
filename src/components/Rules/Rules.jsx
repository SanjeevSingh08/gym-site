import React from "react";
import logo from '../../assets/logo.png'
import './Rules.scss'
const Rules = () => {
  return (
    <div className="rules">
      <div className="r-head">
        <h2><span className="stroke-text">GYM </span>RULES</h2>
      </div>
      <div className="blur her-blur"></div>
      <div className="r-content">
        <div className="r-text">
          <p>
          • Vigour The Fitness Studio  , you voluntarily accept the risk of injury
            whether caused by you or not, whether you are participating in
            activities or not. Vigour The Fitness Studio   is NOT liable for any injuries
            that may occur while in this facility. YOU ASSUME ALL RISKS by
            entering the gym regardless of whether you have signed a liability
            waiver.
          </p>
          <p>
            • Members are NOT allowed to bring guests. Day passes are available
            for purchase at the front desk during staffed hours.
          </p>

          <p>
            • The gym is under 24/7 surveillance and video may be used to assist
            in the prosecution of crimes.
          </p>

          <p>
            • We do not tolerate sexual harassment, violent aggression toward
            others, or abusive language used toward other members or staff.
          </p>
          <p>
            • The gym is not liable for photos or videos taken within facility.
            Content creators MUST contact gym and obtain permission to create
            digital content within the gym. Members may take photos/videos and
            use accessories like a small tripod provided they are courteous to
            other members. Disregard for other members or the gym will result in
            termination of membership.
          </p>

          <p>
           
          • Proper fitness attire is required while training. Absolutely no
            shirtless training allowed. No sandals or bare feet allowed while
            training. Socks on the deadlift platform are acceptable if proper
            shoes are worn elsewhere.
          </p>

          <p>
          • Vigour The Fitness Studio   reserves the right to terminate a membership at
            any time and for any reason.
          </p>
        </div>
        <div className="r-logo">    <img src={logo} alt="" /></div>
        <div className="blur hero-blur"></div>
      </div>
    </div>
  );
};

export default Rules;
