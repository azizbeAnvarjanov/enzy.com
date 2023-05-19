import React from 'react'
import './Main.css';

import { TbSchool } from 'react-icons/tb'

import logos_1 from '../../imgs/logos_1.png'
import logos_2 from '../../imgs/logos_2.png'
import logos_3 from '../../imgs/logos_3.png'
import logos_4 from '../../imgs/logos_4.png'
import logos_5 from '../../imgs/logos_5.png'


function Main() {
  return (
    <>
        <div className='main_page'>
            <div className='main_txt'>
              <h1>Biz sizdagi "tibbiyot qiyin" degan stereotipingizni o'zgartiramiz!</h1>
              <h2>Tibbiyotni osonroq biz bilan o'zlashtiring!</h2>
              <button>Boshlash</button>
              <a href="#">Demo</a>
            </div>
        </div>
        <div className="about_video">
        </div>
        <div className="about_menu">
            <div className="links">
                <div>
                  <TbSchool />
                  <h2>Step цвц1</h2>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div>
                  <TbSchool />
                  <h2>Step 2</h2>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
                <div>
                  <TbSchool />
                  <h2>OET</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem!</p>
                </div>
                <div>
                  <TbSchool />
                  <h2>Formatsevtika</h2>
                  <p>Lorem, ipsum dolor.</p>
                </div>
                <div>
                  <TbSchool />
                  <h2>Hamshiralik</h2>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div>
                  <TbSchool />
                  <h2>Abiturient</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                  <TbSchool />
                  <h2>Market</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam.</p>
                </div>
                <div>
                  <TbSchool />
                  <h2>Aloqa</h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
        
        <div className="hamkorlar">
          <h1>Ko'p foydalanadigan manbalar</h1>
          <div className='logos'>
              <img src={logos_1} alt="" />
              <img src={logos_2} alt="" />
              <img src={logos_3} alt="" />
              <img src={logos_4} alt="" />
              <img src={logos_5} alt="" />
          </div>
        </div>

        <div className="team">
            <h1>Jamoas</h1>
            <div className='team_box'>
                <div>
                  <p>Anvarjanov Azizbek</p>
                </div>
                <div>
                  <p>Anvarjaqewdqwdqwdnov Azizbek</p>
                </div>
                <div>
                  <p>Anvarjanov Azizbek</p>
                </div>
                <div>
                  <p>Anvarjanov Azizbek</p>
                </div>
                <div>
                  <p>Anvarjanov Azizbek</p>
                </div>
                <div>
                  <p>Anvarjanov Azizbek</p>
                </div>
            </div>
        </div>
    </>
  )
}


export default Main
