import { useState , useEffect} from 'react';
// import {Link} from 'react-router-dom';
import './Navbar.css'




import { RiBuilding2Fill } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdMarkEmailUnread } from 'react-icons/md';
import { BsChatText, BsTelegram, BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';

import navbar_brand from '../../imgs/logo 2 black.png'
import logomini from '../../imgs/logo alohida.png'

import { FaRegQuestionCircle } from 'react-icons/fa'
import { FaRegUser } from 'react-icons/fa'
import { FaShoppingBag } from 'react-icons/fa'



function Navbar() {


    const [nav, setNav] = useState(false);
    const [navbarClass, setNavbarClass] = useState(false);
    const [lng, setLng] = useState(false);

    function changeClass() {
        nav ? setNav(false) : setNav(true);
    }
    function chnangeLanguages() {
        lng ? setLng(false) : setLng(true);
    }

    function changePages(e) {
        nav ? setNav(false) : setNav(true);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }


    


    function visible_menu(e) {
      let ul_menu_1 = document.querySelector('.ul_menu_1')
      let ul_menu_2 = document.querySelector('.ul_menu_2');
      let ul_menu_3 = document.querySelector('.ul_menu_3')
      if (e.target.parentElement.className === 'menu_1') {
        ul_menu_1.className === 'ul_menu_1 active' ?
        ul_menu_1.className = "ul_menu_1" : 
        ul_menu_1.className ="ul_menu_1 active";
        ul_menu_2.classList.remove('active');
        ul_menu_3.classList.remove('active');
      } else if(e.target.parentElement.className === 'menu_2'){
        ul_menu_2.className === 'ul_menu_2 active' ?
        ul_menu_2.className = "ul_menu_2" : 
        ul_menu_2.className ="ul_menu_2 active";
        ul_menu_1.classList.remove('active');
        ul_menu_3.classList.remove('active');
      } else if(e.target.parentElement.className === 'menu_3'){
        ul_menu_3.className === 'ul_menu_3 active' ?
        ul_menu_3.className = "ul_menu_3" : 
        ul_menu_3.className ="ul_menu_3 active";
        ul_menu_1.classList.remove('active');
        ul_menu_2.classList.remove('active');
      } else{
        ul_menu_1.classList.remove('active');
        ul_menu_2.classList.remove('active');
        ul_menu_3.classList.remove('active');
      }
      
      

    }




    window.addEventListener('scroll', () => {
       if (window.scrollY >= 100) {
            setNavbarClass(true);
        }else {
            setNavbarClass(false);
        }
    });

    function upBtnF() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

    

    useEffect(()=>{
      window.addEventListener('resize', ()=> {
        if (document.documentElement.clientWidth < 870) {
          document.querySelector('.res_img').src = logomini
        }else{
          document.querySelector('.res_img').src = navbar_brand
        }
      })
    }, [])

    return (
      <>
        <div className={navbarClass ? "navbar active" : "navbar"}>
          <div className="nav">
            <div className="navbar-brand">
              {/* <a onClick={upBtnF} href="#">
                <img className='res_img' src={navbar_brand} alt="" />
              </a> */}
              <a onClick={upBtnF} href="#">
                <img className='res_img' src={navbar_brand} alt="" />
              </a>
             
              <div
                className={nav ? "menu active" : "menu"}
                onClick={changeClass}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <ul className={nav ? "navigation active" : "navigation"}>
              <li className="menu_1" onClick={(e) => visible_menu(e)}>
                <a>
                Step 1
                  <IoIosArrowDown onClick={(e) => visible_menu(e)}/>
                </a>
                <div className="ul_menu_1 ul_menu">
                  <li><a href="#" onClick={changePages}>Hujayra biologiyasi</a></li>
                  <li><a href="#" onClick={changePages}>Embriologiya</a></li>
                  <li><a href="#" onClick={changePages}>Anatomiya</a></li>
                  <li><a href="#" onClick={changePages}>Neyroanatomiya</a></li>
                  <li><a href="#" onClick={changePages}>Fiziologiya</a></li>
                  <li><a href="#" onClick={changePages}>Bioximiya</a></li>
                  <li><a href="#" onClick={changePages}>Farmakologiya</a></li>
                  <li><a href="#" onClick={changePages}>Mikrobiologiya</a></li>
                  <li><a href="#" onClick={changePages}>Immunologiya</a></li>
                  <li><a href="#" onClick={changePages}>Patalogiya</a></li>
                  
                </div>
              </li>
              <li className="menu_2" onClick={(e) => visible_menu(e)}>
                <a>
                Step 2
                  <IoIosArrowDown onClick={(e) => visible_menu(e)}/>
                </a>
                <div className="ul_menu_2 ul_menu">
                <li><a href="#" onClick={changePages}>Ichki kasalliklar</a></li>
                  <li><a href="#" onClick={changePages}>Akusherstvo va ginekologiya</a></li>
                  <li><a href="#" onClick={changePages}>Pediatriya</a></li>
                  <li><a href="#" onClick={changePages}>Jarroxlik</a></li>
                  <li><a href="#" onClick={changePages}>Psixiatriya</a></li>               
                </div>
              </li>
              <li className="menu_3" onClick={(e) => visible_menu(e)}>
                <a>
                Oet
                  <IoIosArrowDown onClick={(e) => visible_menu(e)}/>
                </a>
                <div className="ul_menu_3 ul_menu">
                  <li><a href="#" onClick={changePages}>Listening</a></li>
                  <li><a href="#" onClick={changePages}>Reading</a></li>
                  <li><a href="#" onClick={changePages}>Writing</a></li>
                  <li><a href="#" onClick={changePages}>Speaking</a></li>              
                </div>
              </li>
              <li>
              <a href="/fakultet" onClick={changePages}>Formatsevtika</a>
              </li>
              <li>
                <a onClick={changePages} href="/el_kutubxona">
                Hamshiralik
                </a>
              </li>
              <li>
                <a className='faq' onClick={changePages} href="/faq">
                Abiturient
                </a>
              </li>
              <li>
                <a href="/aloqa">Market</a>
              </li>
    
              <li>
                <a href="/aloqa">Biz haqimizda</a>
              </li>
    
              <li>
                <a href="/aloqa">Aloqa</a>
              </li>
              <div className="login-register mobile_register_box">
                  <button className='login_btn'>Login</button>
                  <button className='register_btn'>Registertion</button>
               </div>
    
            </ul>
            <div className="login-register desktop_register_box">
              <button className='login_btn'>Login</button>
              <button className='register_btn'>Registertion</button>
            </div>
          </div>
        </div>
      </>
    );
  }

export default Navbar;
