import React from 'react';
import './Course.css';


import { ImPlay } from 'react-icons/im'
import { BsFillFileEarmarkTextFill } from 'react-icons/bs'
import { FaClipboardList } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'



function Course() {


    
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
        <div className="course_box">

            <div className="course_video_box">
                <div className="course_video">
                <iframe width="885" height="498" src="https://www.youtube.com/embed/FaR7bnXnRjs" title="Sinapslar I fiziologiya 2-qism" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="course_comments">
                    <input type="text" name="" id="" placeholder='Izohingizni yozing'/>
                    <a href="#"><FiSend /></a>
                </div>
            </div>  

            <div className="course_theme_lists">
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
                    <div className="accordion">
                    <div className="savol-div">
                        <h1>8 mavzu</h1>
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
                        <h1>9 mavzu</h1>
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
                        <h1>10 mavzu</h1>
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

        </div> 
    </>
  )
}

export default Course
