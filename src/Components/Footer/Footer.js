import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { IoIosArrowUp } from 'react-icons/io';
import { RiBuilding2Fill } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdMarkEmailUnread } from 'react-icons/md';
import { BsChatText, BsTelegram, BsInstagram, BsYoutube} from 'react-icons/bs';



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
              <h3>Enyzyme</h3>
            </div>
            <div className="info_enyzyme">
            <a target="_blank" href='#'>
                <RiBuilding2Fill />
                Enzyme
                </a>

                <a href='mialto:info@enzyme.uz'>
                <MdMarkEmailUnread />
                info@enzyme.uz
                </a>

                <a href="Tel:+998941027707">
                <FaPhoneAlt className='phone_icon' />
                +998 (94) 102 77 07
                </a>

              <a target="_blank" href="https://t.me/drabdurashidov">
                <BsChatText />
                enzyme_support
                </a> <br />
                <div >
                  <a target="_blank" href="https://t.me/enzymenotes">
                    <BsTelegram />
                    </a>
                  <a target="_blank" href="https://instagram.com/enzymenotes?igshid=NTc4MTIwNjQ2YQ==">
                    <BsInstagram />
                    </a>
                  <a target="_blank" href="https://youtube.com/@enzymemedicalscience">
                    <BsYoutube />
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