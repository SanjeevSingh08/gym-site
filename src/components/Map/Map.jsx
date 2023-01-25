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
       <span><iframe title='hi' className="map" src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.5993154136063!2d88.339989414761!3d22.59408468517178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277e9f32a057b%3A0x60ab311bd23d71d2!2sVigour%20The%20Fitness%20Studio!5e0!3m2!1sen!2sin!4v1674660104894!5m2!1sen!2sin" ></iframe></span>
    </div>
       </div>
       </>
  )
 
}
export default Map
