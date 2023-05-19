import React from 'react'
import './Navbar.css'
import { useState } from 'react';

import logo from '../../imgs/logo.png'
import logo2 from '../../imgs/Logo2.jpg'
import logo3 from '../../imgs/logo 2 black.png'


import { FaRegQuestionCircle } from 'react-icons/fa'
import { FaRegUser } from 'react-icons/fa'
import { FaShoppingBag } from 'react-icons/fa'



function Navbar() {

  const [navbarClass, setNavbarClass] = useState(false);


  window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
         setNavbarClass(true);
     }else {
         setNavbarClass(false);
     }
 });



  return (
    <>
        <nav className={navbarClass ? "active" : ""}>
          <div className="logo">
            <img src={logo3} alt="" />
          </div>
          <div className="navigation">
            <ul>
              <li><a href="#">Step 1</a></li>
              <li><a href="#">Step 2</a></li>
              <li><a href="#">Oet</a></li>
              <li><a href="#">Formatsevtika</a></li>
              <li><a href="#">Hamshiralik</a></li>
              <li><a href="#">Abiturient</a></li>
              <li><a href="#">Market</a></li>
              <li><a href="#">Biz haqimizda</a></li>
              <li><a href="#">Aloqa</a></li>
            </ul>
          </div>
          <div className="regstration_box">
            <div className="icon_1">
              <FaRegQuestionCircle />
            </div>
            <div className="icon_2">
              <FaShoppingBag />
            </div>
            <div className="icon_3">
              <FaRegUser />
            </div>
          </div>
        </nav>
    </>
  )
}

export default Navbar
