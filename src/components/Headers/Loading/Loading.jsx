import React from 'react'

import "./Loading.scss"
import logo from "../../../assets/logo.png"
const Loading = () => {
  return (
 <div className="load">
    
     {/* <div className="cssload-box-loading">
  
  </div>*/}
  <div>

  <img src={logo} alt="" />
  <h1>Vigour The Fitness Studio.</h1>
 <h3>Best Gym in Howrah that provides strength training, cardio, zumba, aerobics and dance training.</h3>
  </div>
</div>
   
  )
}

export default Loading
