import React from 'react';
import './Platform.css';
import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player/youtube'

import { ImPlay } from 'react-icons/im'
import { BsFillFileEarmarkTextFill } from 'react-icons/bs'
import { FaClipboardList } from 'react-icons/fa'



function Platform() {


    function accordion(e) {
        document.querySelectorAll('.accordion')
        .forEach(el => el.classList.remove('active'));
        if (e.target.tagName === 'H1') {
            e.target.parentElement.parentElement.classList.add("active");
        }
        e.target.parentElement.classList.add('active');
    }



  return (
    <>
        <div className="platform_box">
            <div className="course_descriptions">
                <h1>Embriologiya</h1>  <br />   
                <p>Embriologiya – tuxum hujayra urug’langandan so’ng, shu hujayradan yangi organizmning, ona organizmida shakllanishini o’rganadigan fan. Shu kungacha yurtimizda bakalavr bosqichidagi talabalar uchun ushbu fan juda qiziq bo’lmagan, chunki bu fan alohida fan sifatida emas, balki boshqa bir fanning tarkibiga kirgan holatda o’qitilgan. Ishoning, aslida bu juda ham qiziqarli va hayratlanarli shuningdek qaysidir ma’noda mo’jizaviy fan. Buni o’qish davomida tushunib yetasiz.</p> 
            </div> 
            <div className="course_video_treyler">
                <div className="video_trayler_box">
                    <div className="video_platform">
                    <ReactPlayer controls className="video" url='https://www.youtube.com/embed/FaR7bnXnRjs' />
                    </div>
                    <Link to="/course">Kursni boshlash</Link>
                </div>
            </div> 
        </div> 
    </>
  )
}

export default Platform
