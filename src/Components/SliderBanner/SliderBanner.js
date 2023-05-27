import React from 'react'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import img from '../../imgs/laptop-png.png'

import Slider from 'react-slick';

function SliderBanner() {
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

    </>
  )
}

export default SliderBanner
