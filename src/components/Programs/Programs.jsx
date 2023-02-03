import React from 'react'
import './Programs.scss'
import {programsData} from '../../data/programsData'

import { Link } from 'react-router-dom'
const Programs = () => {
  return (
    <>
   
    <div className="Programs" id="programs">
        {/*Headers*/}
        <div className="programs-header">
        <div className="blur hero-blur"></div>
        <div className="blur her-blur"></div>
 
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>
        <Link to="/plans"><div className="program-categories">
            {programsData.map((program)=>(
                <div className="category" key={program.details}>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">  <button style={{backgroundColor: "rgb(8 55 96)", border:"white 2px solid",padding:"8px 10px", boxShadow:"-4px 2px  white",color:"white"}}className="btn">Get Started</button>
                 </div>
                </div>
            ))}
        </div></Link>
        
    </div>
    {/*<section class="campus">
    <h1><span className='stroke-text'>Our  Top </span>Facilities</h1>
   
    <div class="ro">
      <div class="campus-col">
        <img src={f9} alt=""/>
        <div class="layer">
          <h4>LOCKER ROOM</h4>

        </div>
      </div>
      <div class="campus-col">
        <img src={f10} alt=""/>
        <div class="layer">
          <h4>QUALITY EQUIPMENTS</h4>
        </div>
      </div>
      <div class="campus-col">
        <img src={f11} alt=""/>
        <div class="layer">
          <h4>PERSONAL TRAINER</h4>
        </div>
      </div>
    </div>
  </section>*/}
    </>
  )
}

export default Programs
