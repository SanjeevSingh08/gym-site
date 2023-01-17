import React from 'react'
import "./Join.scss";
const Join = () => {
  return (
    <>
    <div className="Join" id="join">
        <div className="left-j">
            <hr />
            <div>
            <span className='stroke-text hr-text'>READY TO</span>
            <span> LEVEL UP  </span>
            </div>

       
        <div><span> YOUR BODY</span><span className='stroke-text'> WITH US?</span>
        </div>
        </div>
      
        <div className="right-j">
<form className="email-container" action="">
    <input type="email" name='user-email'placeholder='Enter your email address.' />
    <button className='btn btn-j'>Join Now</button>
</form>
        </div>
     
       
    </div>

       <hr />
   </>
  )
}

export default Join
