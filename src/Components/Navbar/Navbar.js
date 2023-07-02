import { useState , useEffect} from 'react';
import './Navbar.css'
import { MdMarkEmailUnread } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { RiBuilding2Fill } from 'react-icons/ri';
import { FaPhoneAlt , FaUserCircle, FaUserTie, FaUserGraduate, FaRegUser} from 'react-icons/fa';
import { BsChatText, BsTelegram, BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs';

import logo_imi from '../../imgs/logo alohida.png'

  



function Azizbek() {



    const [nav, setNav] = useState(false);
    const [navbarClass, setNavbarClass] = useState(false);
    const [lng, setLng] = useState(false);
    const [status, setStatus] = useState(true);

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


    function open_close_platform() {
      status ? setStatus(false) :setStatus(true);
    }

    

    function partners(e) {
        let partners = document.querySelector('.partners_menu')

    



        if (e.target.className === 'partners') {
            partners.className === 'partners_menu' ? partners.className = 'partners_menu active' : partners.className = 'partners_menu' 
        } else{
          partners.className = 'partners_menu';
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




  return (
    <>
      <nav className={navbarClass ? "active" : ""}>

     

        <div className="navbar">
            <div className="logo_imi">
                <div className="logo_imi_box">
                    <img src={logo_imi} alt="" />
                </div>
                <div className='logo_txt'>
                  <p>ENZYME</p>
                </div>
            </div>
              <div className='user_menu'> 
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
                <li>
                <Link className='tuzilma'>
                STEP 1
                </Link>

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
                <li>
                <Link className='tuzilma'>
                STEP 2
                </Link>

                    <ul className='sub_menu'>
                        <li><a href="#">Ichki kasalliklar</a></li>
                        <li><a href="#">Akushestvo va Ginekologiya</a></li>
                        <li><a href="#">Piseatriya</a></li>
                        <li><a href="#">Jarroxlik</a></li>
                        <li><a href="#">Psixatriya</a></li>
                    </ul>

                </li>
                <li>
                <Link className='tuzilma'>
                STEP 3
                </Link>

                    <ul className='sub_menu'>
                        <li><a href="#">Listening</a></li>
                        <li><a href="#">Reading</a></li>
                        <li><a href="#">Writing</a></li>
                        <li><a href="#">Speaking</a></li>
                    </ul>

                </li>
                <li><a href="#">FORMATSEFTIKA</a></li>
                <li><a href="#">HAMSHIRALIK</a></li>
                <li><a href="#">ABITURIENT</a></li>
                <li><a href="#">MARKET</a></li>
                <li><a href="#">BIZ HAQIMIZDA</a></li>
                <li><a href="#">ALOQA</a></li>
                {/* <Link to='/login'onClick={ch  angePages} className='login_btn'>Kirish</Link> */}
                
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Azizbek
