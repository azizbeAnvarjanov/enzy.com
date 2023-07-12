import React, { useState , useEffect }from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

import navbar_logo from '../../imgs/white logo.png'

import { MdKeyboardArrowDown } from 'react-icons/md'




import { FaUserGraduate, FaUserTie } from 'react-icons/fa'


const languages = [
  {
    language: 'uz',
    innerHtml: 'Uz',
    id: '1'
  },
  {
    language: 'ru',
    innerHtml: 'Ru',
    id: '2'
  },
  {
    language: 'en',
    innerHtml: 'En',
    id: '3'
  },
]




function Navbar() {


  const [nav, setNav] = useState(false);
  const [user, setUser] = useState(true);


  function changeClass() {
    nav ? setNav(false) : setNav(true);
  }

  function changeUserClass() {
    user ? setUser(false) : setUser(true);
  }

  useEffect(() => {
    document.querySelectorAll(".lng-en").forEach(el => el.classList.add('active'));
  }, []);

  function changeLng(e) {
    document.querySelectorAll('.lng')
    .forEach(el => el.classList.remove('active'));
    if (e.target.id === "uz") {
      document.querySelectorAll('.lng-uz').forEach(el => el.classList.add('active'))
    }else if(e.target.id === "ru") {
      document.querySelectorAll('.lng-ru').forEach(el => el.classList.add('active'))
    } else {
      document.querySelectorAll('.lng-en').forEach(el => el.classList.add('active'))
    }
  }

function changePages(e) {
      nav ? setNav(false) : setNav(true);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }

  function upBtnF() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }



  return (
    <>
       <nav>
              <Link className='navbar_logo' onClick={upBtnF} to="/">
                <img src={navbar_logo} alt="" />
              </Link>
            <ul className={nav ? "navigation active" : "navigation"}>
              <li className='dropdown'>
                  <a href="#">Step 1 <MdKeyboardArrowDown /></a>
                    <ul className='sub_menu'>
                    <li><a href="#">Hujayra biologiyasi</a></li>
                        <li><a href="#">Embriologiya</a></li>
                        <li><a href="#">Anatomiya</a></li>
                        <li><a href="#">Neyroanatomiya</a></li>
                        <li><a href="#">Fiziologiya</a></li>
                        <li><a href="#">Bioximiya</a></li>
                        <li><a href="#">Farmakologiya</a></li>
                        <li><a href="#">Mikrobiologiya</a></li>
                        <li><a href="#">Immunologiya</a></li>
                        <li><a href="#">Patalogiya</a></li>
                    </ul>  
              </li>
              <li className='dropdown'>
                  <a href="#">Step 2 <MdKeyboardArrowDown /></a>
                    <ul className='sub_menu'>
                    <li><a href="#">Ichki kasalliklar</a></li>
                        <li><a href="#">Akushestvo va Ginekologiya</a></li>
                        <li><a href="#">Piseatriya</a></li>
                        <li><a href="#">Jarroxlik</a></li>
                        <li><a href="#">Psixatriya</a></li>
                    </ul>  
              </li>
              <li className='dropdown'>
                  <a href="#">OET <MdKeyboardArrowDown /></a>
                    <ul className='sub_menu'>
                    <li><a href="#">Listening</a></li>
                        <li><a href="#">Reading</a></li>
                        <li><a href="#">Writing</a></li>
                        <li><a href="#">Speaking</a></li>
                    </ul>  
              </li>
              <li><a href="#">Formatseftika</a></li>
                <li><a href="#">Hamshiralik</a></li>
                <li><a href="#">Abiturient</a></li>
                <li><a href="#">Market</a></li>
                <li><a href="#">Biz haqimizda</a></li>
                <li><a href="#">Aloqa</a></li>
                <a href='#' onClick={changeUserClass} className='login_link'>Login</a>
            </ul>
              <div className={nav ? "menu active" : "menu"}
                   onClick={changeClass}>
                <span></span>
                <span></span>
                <span></span>
              </div>
       </nav>
    </>
  )
}

export default Navbar
