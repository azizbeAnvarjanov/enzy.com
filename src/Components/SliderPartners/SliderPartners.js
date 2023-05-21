import React from 'react'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import manba_1 from '../../imgs/Manbalar/manba_1.png'
import manba_2 from '../../imgs/Manbalar/manba_2.png'
import manba_3 from '../../imgs/Manbalar/manba_3.png'
import manba_4 from '../../imgs/Manbalar/manba_4.png'
import manba_5 from '../../imgs/Manbalar/manba_5.png'
import manba_6 from '../../imgs/Manbalar/manba_6.png'
import manba_7 from '../../imgs/Manbalar/manba_7.png'
import manba_8 from '../../imgs/Manbalar/manba_8.jpg'

import Slider from 'react-slick';

function SliderPartners() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
       <div className='SliderPr'>
        <h1> Ko'p foydalanadigan manbalar </h1>
        <Slider className='slider_div'{...settings}>
          <div className='boxs'>
            <img src={manba_1} alt="" />
          </div>
          <div className='boxs'>
            <img src={manba_2} alt="" />
          </div>
          <div className='boxs'>
            <img src={manba_3} alt="" />
          </div>
          <div className='boxs'>
            <img src={manba_4} alt="" />
          </div>
          <div className='boxs'>
            <img src={manba_5} alt="" />
          </div>
          <div className='boxs'>
            <img src={manba_6} alt="" />
          </div>
          <div className='boxs'>
            <img src={manba_7} alt="" />
          </div>
          <div className='boxs'>
            <img src={manba_8} alt="" />
          </div>
        </Slider>
      </div>

    </>
  )
}

export default SliderPartners
