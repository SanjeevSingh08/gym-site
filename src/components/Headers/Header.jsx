import React from 'react'
import './Header.scss'
import logo from '../../assets/logo.png'
const Header = () => {
  return (
 <div className="header header-visible">
   <img className="logo" src={logo} alt="" />
   <ul className='header-menu header-visibility'>
    <li>Home</li>
    <li>Programs</li>
    <li>Why us</li>
    <li>Plans</li>
    <li>Testimonials</li>
   </ul>
 </div>
  )
}

export default Header
