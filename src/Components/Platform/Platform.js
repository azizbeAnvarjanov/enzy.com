import React from 'react';
import './Platform.css';
import {Link} from 'react-router-dom';

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
                <h1>Embriology</h1>  <br />   
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam nulla deleniti at iusto maxime dolorem deserunt repellendus debitis, corrupti atque, repudiandae illum eum? Quaerat aliquid, unde nam veniam itaque asperiores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi neque aspernatur nam minus. Quibusdam dolore obcaecati nesciunt et soluta sunt beatae asperiores! Suscipit praesentium totam explicabo est eaque molestiae magni?</p> 
                <br />
                <h2>Kurs tarkibi:</h2>
                <div className="right-mednu" onClick={accordion}>
                <div className="accord-box">
                    <div className="accordion active">
                    <div className="savol-div">
                        <h1>Urug'lanishdan oldingi jarayonlar</h1>
                        <div className="plus">
                        <span></span>
                        <span></span>
                        </div>
                    </div>
                    <div className="preview ">
                        <p> <ImPlay /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, quo!</p>
                        <p> <BsFillFileEarmarkTextFill /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, quo!</p>
                        <p> <FaClipboardList /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, quo!</p>
                    </div>
                    </div>
                    <div className="accordion">
                    <div className="savol-div">
                        <h1>2 mavzu</h1>
                        <div className="plus">
                        <span></span>
                        <span></span>
                        </div>
                    </div>
                    <div className="preview">
                    <p> <ImPlay /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, quo!</p>
                        <p> <BsFillFileEarmarkTextFill /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, quo!</p>
                        <p> <FaClipboardList /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, quo!</p>
                    </div>
                    </div>
                    <div className="accordion">
                    <div className="savol-div">
                        <h1>3 mavzu</h1>
                        <div className="plus">
                        <span></span>
                        <span></span>
                        </div>
                    </div>
                    <div className="preview">
                    <p> <ImPlay /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, quo!</p>
                        <p> <BsFillFileEarmarkTextFill /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, quo!</p>
                        <p> <FaClipboardList /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, quo!</p>
                    </div>
                    </div>
                    <div className="accordion">
                    <div className="savol-div">
                        <h1>4 mavzu</h1>
                        <div className="plus">
                        <span></span>
                        <span></span>
                        </div>
                    </div>
                    <div className="preview">
                    <p> <ImPlay /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, quo!</p>
                        <p> <BsFillFileEarmarkTextFill /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, quo!</p>
                        <p> <FaClipboardList /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, quo!</p>
                    </div>
                    </div>
                    <div className="accordion">
                    <div className="savol-div">
                        <h1>5 mavzu</h1>
                        <div className="plus">
                        <span></span>
                        <span></span>
                        </div>
                    </div>
                    <div className="preview">
                    <p> <ImPlay /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, quo!</p>
                        <p> <BsFillFileEarmarkTextFill /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, quo!</p>
                        <p> <FaClipboardList /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, quo!</p>
                    </div>
                    </div>
                    <div className="accordion">
                    <div className="savol-div">
                        <h1>6 mavzu</h1>
                        <div className="plus">
                        <span></span>
                        <span></span>
                        </div>
                    </div>
                    <div className="preview">
                    <p> <ImPlay /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, quo!</p>
                        <p> <BsFillFileEarmarkTextFill /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, quo!</p>
                        <p> <FaClipboardList /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, quo!</p>
                    </div>
                    </div>
                    <div className="accordion">
                    <div className="savol-div">
                        <h1>7 mavzu</h1>
                        <div className="plus">
                        <span></span>
                        <span></span>
                        </div>
                    </div>
                    <div className="preview">
                    <p> <ImPlay /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, quo!</p>
                        <p> <BsFillFileEarmarkTextFill /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, quo!</p>
                        <p> <FaClipboardList /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, quo!</p>
                    </div>
                    </div>
                </div>
                </div>
            </div> 
            <div className="course_video_treyler">
                <div className="video_trayler_box">
                    <div className="video">
                    <iframe width="885" height="498" src="https://www.youtube.com/embed/FaR7bnXnRjs" title="Sinapslar I fiziologiya 2-qism" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <Link to="/course">Kursni boshlash</Link>
                </div>
            </div> 
        </div> 
    </>
  )
}

export default Platform
