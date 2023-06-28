import React from 'react'
import { Routes, Route } from "react-router-dom";
import Course from './Course/Course';

import Login from './Login/Login';
import Main from './Main/Main';
import Platform from './Platform/Platform';

function Pages() {

  return (
    <>
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/course" element={<Course />} />
        </Routes>
    </>
  )
}

export default Pages
      {/* <div className="right-mednu" onClick={accordion}>
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
                </div> */}