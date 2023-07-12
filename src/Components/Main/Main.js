import React from 'react'
import './Main.css';
import {Link} from 'react-router-dom';


import SliderPartners from '../SliderPartners/SliderPartners';
import SliderBanner from '../SliderBanner/SliderBanner';
import List from '../List/List';

import telgram from '../../imgs/telegram img.png'


import AboutVideo from '../AboutVideo/AboutVideo';

import illustrate_1 from '../../imgs/illustrates/1.png'
import illustrate_2 from '../../imgs/illustrates/2.png'
import illustrate_3 from '../../imgs/illustrates/3.png'


import { FaTelegramPlane } from 'react-icons/fa'


import Slider from 'react-slick';

import dt from '../../imgs/dt.jpg'
import aa from '../../imgs/aaa.jpg'
import abd from '../../imgs/abd.jpg'


function Main() {

  let settings = {
    dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      
  };



  return (
    <>
       <div className='SliderBanner'>
        <Slider className='SliderBanner_div'{...settings}>
            <div className='main_txt'>
                <div>
                    <h1>Biz sizdagi "tibbiyot qiyin" degan stereotipingizni o'zgartiramiz!</h1>
                    <h2>Tibbiyotni osonroq biz bilan o'zlashtiring!</h2>
                    <Link className='demoBtn bg_gradient' to='/platform'>Demo</Link>
                </div>
                <div>
                  <img src={illustrate_1} alt="" />
                </div>
            </div>
            <div className='main_txt'>
                <div>
                    <h1>Kimga mazza? <del>Boylarga</del> O'qiganlarga mazza!</h1>
                    <h2>Tibbiyotni osonroq biz bilan o'zlashtiring!</h2>
                    <Link className='demoBtn bg_gradient' to='/platform'>Demo</Link>
                </div>
                <div>
                  <img src={illustrate_2} alt="" />
                </div>
            </div>
            <div className='main_txt'>
               <div>
                    <h1>Xorijiy standartlar asosida qurilgan tibbiy fundamental va klinik fanrlar platformasi</h1>
                    <h2>Tibbiyotni osonroq biz bilan o'zlashtiring!</h2>
                    <Link className='demoBtn bg_gradient' to='/platform'>Demo</Link>
               </div>
               <div>
                  <img src={illustrate_3} alt="" />
               </div>
            </div>
        </Slider>
      </div>
      <div className="statistic_box bg_gradient">
          <div>
            <h1>16</h1>
            <p>Onlayn dars bir oy ichida</p>
          </div>
          <div>
            <h1>90+</h1>
            <p>foiz DTM ga tayorgarlik</p>
          </div>
          <div>
            <h1>24/7</h1>
            <p>shaxsiy kurator ko'magi</p>
          </div>
          <div>
            <h1>1000+</h1>
            <p>Onlayn DTM testlar</p>
          </div>
        </div>
        <AboutVideo />
      
         <List />
       
    
        <div className="team">
            <h1 className='bg_gradient'>Bizning jamoa</h1>
            <div className='team_box'>
                <div className="worker">
                   <div className="worker_img">
                    <img src={aa} alt="" />
                   </div>
                   <div className="worker_info">
                      <h2>Azizbek A.</h2>
                      <h3>Front-end mutaxassis</h3>
                      <p>IMPULS BSR bosh IT mutaxassisi; 4-yillik malaka</p>
                   </div>
                </div>
                <div className="worker">
                   <div className="worker_img">
                    <img src={abd} alt="" />
                   </div>
                   <div className="worker_info">
                      <h2>Abdurauf A.</h2>
                      <h3>CEO; Project manager, Steptaker</h3>
                      <p>PM sohasida 5 yillik tajriba</p>
                   </div>
                </div>
                <div className="worker">
                   <div className="worker_img">
                    <img src={dt} alt="" />
                   </div>
                   <div className="worker_info">
                      <h2>Dovudxon T.</h2>
                      <h3>Steptaker</h3>
                      <p>Endourologiya sohasi magistranti "Dovudbek lectures" asoschisi</p>
                   </div>
                </div>
            </div>
        </div>

        <div className="team_img"></div>
        <div className="telegram_link">
          <div className="link_img">
            <img src={telgram} alt="" />
          </div>
          <div className="link_info">
            <h1>O'qituvchilarimiz va metodistlarimiz tomonidan imtihonga tayorlarlik ko'rish uchun bepul o'quv materiallariga ega bo'ling</h1>
            <div className="tel_link">
              <Link to="https://t.me/enzymenotes" className='bg_gradient' target="_blank"><FaTelegramPlane />
              Bizning telegram kanalimizga obuna bo'ling</Link>
            </div>
          </div>
        </div>
    </>
  )
}


export default Main
