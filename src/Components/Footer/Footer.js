import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { IoIosArrowUp } from 'react-icons/io';
import { RiBuilding2Fill } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdMarkEmailUnread } from 'react-icons/md';
import { BsChatText, BsTelegram, BsInstagram, BsFacebook, BsWhatsapp} from 'react-icons/bs';

import logomini from '../../imgs/logo alohida.png'


function Footer() {


    function upBtnF() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    }




    return (
      <>
        <footer className="reveal">
         
        <div className='footer_wrapper'>
        <div className="footer_boxs">
            <div className='footer_logo_div'>
              <img src={logomini} alt="" />
              <h3>Enyzyme</h3>
            </div>
            <div className="info_enyzyme">
            <a target="_blank" href='https://goo.gl/maps/QEviBtDeDuxLpc148'>
                <RiBuilding2Fill />
                Enzyme
                </a>

                <a href='mialto:info@impulsmi.uz'>
                <MdMarkEmailUnread />
                info@enzyme.uz
                </a>

                <a href="Tel:+998555105015">
                <FaPhoneAlt className='phone_icon' />
                +998 (00) 000 00 00
                </a>

              <a target="_blank" href="https://t.me/impuls_medical_institute">
                <BsChatText />
                enzyme_support
                </a> <br />
              <div >
              <a target="_blank" href="https://t.me/impulsmi_uz">
                <BsTelegram />
                </a>
              <a target="_blank" href="https://www.instagram.com/impuls_mi/">
                <BsInstagram />
                </a>
              <a target="_blank" href="https://www.facebook.com/people/Impuls-Medical-Institute/100076602543508/">
                <BsFacebook />
                </a>
              <a target="_blank" href="https://wa.me/message/GYTRCNFXZX6VI1?src=qr">
                <BsWhatsapp />
                </a>
              </div>
            </div>
           
          </div>

          <div className="footer_boxs">
            <h2>Step 1</h2>
            <a href="/usmle">Hujayra biologiyasi</a>
            <a href="/usmle">Embriologiya</a>
            <a href="/usmle">Anatomiya</a>
            <a href="/usmle">Neyroanatomiya</a>
            <a href="/usmle">Fiziologiya</a>
            <a href="/usmle">Bioximiya</a>
            <a href="/usmle">Farmakologiya</a>
            <a href="/usmle">Mikrobiologiya</a>
            <a href="/usmle">Immunologiya</a>
            <a href="/usmle">Patalogiya</a>
          </div>
          
          <div className="footer_boxs">
            <h2> Step 2</h2>
            <a href="/usmle">Ichki kasalliklar</a>
            <a href="/usmle">Akusherstvo va ginekologiya</a>
            <a href="/usmle">Pediatriya</a>
            <a href="/usmle">Jarroxlik</a>
            <a href="/usmle">Psixiatriya</a>
          </div>
          
          
      
        </div>

          <div className="footer-copyryter">
            <div className="btn-up" onClick={upBtnF}>
              <IoIosArrowUp />
            </div>
          </div>



        </footer>
      </>
    );
}

export default Footer;