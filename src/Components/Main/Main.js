import React from 'react'
import './Main.css';

import SliderPartners from '../SliderPartners/SliderPartners';
import SliderBanner from '../SliderBanner/SliderBanner';
import List from '../List/List';

import { TbSchool } from 'react-icons/tb'

import logos_1 from '../../imgs/logos_1.png'
import logos_2 from '../../imgs/logos_2.png'
import logos_3 from '../../imgs/logos_3.png'
import logos_4 from '../../imgs/logos_4.png'
import logos_5 from '../../imgs/logos_5.png'

import dt from '../../imgs/dt.jpg'
import aa from '../../imgs/aaa.png'
import abd from '../../imgs/abd.jpg'


function Main() {




  return (
    <>
          <SliderBanner />
        <div className="about_video">
        <iframe width="885" height="498" src="https://www.youtube.com/embed/FaR7bnXnRjs" title="Sinapslar I fiziologiya 2-qism" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        {/* <div className="about_menu">
            <div className="links">
                <div>
                  <TbSchool />
                  <h2>Step 1</h2>
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
         */}
         <List />
       
        <SliderPartners />
        <div className="team">
            <h1>Bizning jamoa</h1>
            <div className='team_box'>
                <div className="worker">
                  <div className='w_img'>
                    <img src={aa} alt="" />
                  </div>
                  <h2>Azizbek A.</h2>
                  <h3>Front-end mutaxassis</h3>
                  <p>IMPULS BSR bosh IT mutaxassisi; 4-yillik malaka</p>
                </div>
                <div className="worker">
                  <div className='w_img'>
                    <img src={abd} alt="" />
                  </div>
                  <h2>Abdurauf A.</h2>
                  <h3>CEO; Project manager</h3>
                  <p>Steptaker</p>
                  <p>PM sohasida 5 yillik tajriba</p>
                </div>
                <div className="worker">
                  <div className='w_img'>
                    <img src={dt} alt="" />
                  </div>
                  <h2>Dovudxon T.</h2>
                  <h3>Steptaker</h3>
                  <p>Endourologiya sohasi magistranti "Dovudbek lectures" asoschisi</p>
                </div>
            </div>
        </div>
    </>
  )
}


export default Main
