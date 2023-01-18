import React from 'react'
import "./Map.scss"
import Phone from "../../assets/phone-transparent.png"
const Map = () => {
  return (
    <>
  
    <div className='map-div'>
      
      <div className="border">
        <div className="blur blur-m-1"></div>
        <div className="blur blur-m-2"></div>
      <img className='phone' src={Phone} alt="" />
       <span><iframe title='hi' className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29472.550573003413!2d88.31294740309859!3d22.576529176909077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02772768f6a3ad%3A0x6156949b3121a22e!2sMuscle%20Factory%20Gym!5e0!3m2!1sen!2sin!4v1674046658176!5m2!1sen!2sin" ></iframe></span>
    </div>
       </div>
       </>
  )
}
