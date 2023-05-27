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
import img from '../../imgs/laptop-png.png'
import Slider from 'react-slick';

import dt from '../../imgs/dt.jpg'
import aa from '../../imgs/aaa.png'
import abd from '../../imgs/abd.jpg'


function Main() {

  let settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
  };



  return (
    <>
       <div className='SliderBanner'>
        <Slider className='SliderBanner_div'{...settings}>
            <div className='main_txt'>
                <h1>Biz sizdagi "tibbiyot qiyin" degan stereotipingizni o'zgartiramiz!</h1>
                <h2>Tibbiyotni osonroq biz bilan o'zlashtiring!</h2>
                <button>Boshlash</button>
                <a href="#">Demo</a>
            </div>
            <div className='main_txt'>
                <h1>Kimga mazza? <del>Boylarga</del> O'qiganlarga mazza!</h1>
                <h2>Tibbiyotni osonroq biz bilan o'zlashtiring!</h2>
                <button>Boshlash</button>
                <a href="#">Demo</a>
            </div>
            <div className='main_txt'>
                <h1>Xorijiy standartlar asosida qurilgan tibbiy fundamental va klinik fanrlar platformasi</h1>
                <h2>Tibbiyotni osonroq biz bilan o'zlashtiring!</h2>
                <button>Boshlash</button>
                <a href="#">Demo</a>
            </div>
        </Slider>
        <div className="laptop_img">
            <img src={img} alt="" />
        </div>
      </div>
        <div className="about_video">
        <iframe width="885" height="498" src="https://www.youtube.com/embed/FaR7bnXnRjs" title="Sinapslar I fiziologiya 2-qism" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      
         <List />
       
        {/* <SliderPartners /> */}
        <div className="team">
            <h1>Bizning jamoa</h1>
            <div className='team_box'>
                <div className="worker">
                   <div className="worker_img">
                    <img src={aa} alt="" />
                   </div>
                   <div className="worker_info">
                      <h1>Azizbek A.</h1>
                      <h3>Front-end mutaxassis</h3>
                      <p>IMPULS BSR bosh IT mutaxassisi; 4-yillik malaka</p>
                   </div>
                </div>
                <div className="worker">
                   <div className="worker_img">
                    <img src={abd} alt="" />
                   </div>
                   <div className="worker_info">
                      <h1>Abdurauf A.</h1>
                      <h3>CEO; Project manager, Steptaker</h3>
                      <p>PM sohasida 5 yillik tajriba</p>
                   </div>
                </div>
                <div className="worker">
                   <div className="worker_img">
                    <img src={dt} alt="" />
                   </div>
                   <div className="worker_info">
                      <h1>Dovudxon T.</h1>
                      <h3>Steptaker</h3>
                      <p>Endourologiya sohasi magistranti "Dovudbek lectures" asoschisi</p>
                   </div>
                </div>
            </div>
        </div>
    </>
  )
}


export default Main
