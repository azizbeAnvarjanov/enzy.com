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
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam nulla deleniti at iusto maxime dolorem deserunt repellendus debitis, corrupti atque, repudiandae illum eum? Quaerat aliquid, unde nam veniam itaque asperiores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi neque aspernatur nam minus. Quibusdam dolore obcaecati nesciunt et soluta sunt beatae asperiores! Suscipit praesentium totam explicabo est eaque molestiae magni?</p> 
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
