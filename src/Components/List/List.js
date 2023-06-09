import React from 'react'
import './List.css'
import { Link } from 'react-router-dom';


import _1 from '../../imgs/Scienses imgs/1.jpg'
import _5 from '../../imgs/Scienses imgs/cell_biology.jpg'
import _3 from '../../imgs/Scienses imgs/Biochemistry.jpg'
import _4 from '../../imgs/Scienses imgs/Biochemistry.jpg'
import _6 from '../../imgs/Scienses imgs/Microbiology.jpg'
import _7 from '../../imgs/Scienses imgs/Neuroanatomy.jpg'
import _8 from '../../imgs/Scienses imgs/Pharmacology.jpg'



function List() {

  function upBtnF() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }



  return (
    <div className='list'>
        <h1>Bizning kusrlar</h1>
        <div className="kurslar_box">
          <div className='_1'>
              <div className='kurs'>
                  <div className="kurs_top">
                      <Link onClick={upBtnF} to="/platform"><img src={_1} alt="" /></Link>
                  </div>
                  <div className="kurs_bottom">
                     <div>
                      <h2>Hujayra biologiyasi</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem magni quis placeat velit consequuntur eum magnam voluptas est reiciendis mollitia debitis asperiores, eius aspernatur porro accusantium, voluptatibus rem quia?</p>
                     </div>
                      <div className="kurs_btn">
                        <Link onClick={upBtnF} className='btn_buy bg_gradient' to="/platform">Bepul</Link>
                        <a href="#">0 UZS</a>
                      </div>
                  </div>
              </div>
              <div className='kurs'>
                  <div className="kurs_top">
                      <a href="#"><img src={_5} alt="" /></a>
                  </div>
                  <div className="kurs_bottom">
                  <div>
                      <h2>Embriologiya</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem magni quis placeat velit consequuntur eum magnam voluptas est reiciendis mollitia debitis asperiores, eius aspernatur porro accusantium, voluptatibus rem quia?</p>
                     </div>
                      <div className="kurs_btn">
                        <a href="#" className='btn_buy bg_gradient'>Sotib olish</a>
                        <a href="#">350 000 UZS</a>
                      </div>
                  </div>
              </div>
          </div>
          <div className='_1 _2'>
              <div className='kurs'>
                  <div className="kurs_top">
                      <a href="#"><img src={_1} alt="" /></a>
                  </div>
                  <div className="kurs_bottom">
                     <div>
                      <h2>Anatomiya</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem magni quis placeat velit consequuntur eum magnam voluptas est reiciendis mollitia debitis asperiores, eius aspernatur porro accusantium, voluptatibus rem quia?</p>
                     </div>
                      <div className="kurs_btn">
                        <a className='btn_buy bg_gradient' href="#">Sotib olish</a>
                        <a href="#">350 000 UZS</a>
                      </div>
                  </div>
              </div>
              <div className='kurs'>
                  <div className="kurs_top">
                      <a href="#"><img src={_7} alt="" /></a>
                  </div>
                  <div className="kurs_bottom">
                  <div>
                      <h2>Neyroanatomiya</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem magni quis placeat velit consequuntur eum magnam voluptas est reiciendis mollitia debitis asperiores, eius aspernatur porro accusantium, voluptatibus rem quia?</p>
                     </div>
                      <div className="kurs_btn">
                        <a href="#" className='btn_buy bg_gradient'>Sotib olish</a>
                        <a href="#">350 000 UZS</a>
                      </div>
                  </div>
              </div>
          </div>
          <div className='_1 _3'>
              <div className='kurs'>
                  <div className="kurs_top">
                      <a href="#"><img src={_3} alt="" /></a>
                  </div>
                  <div className="kurs_bottom">
                     <div>
                      <h2>Fiziologiya</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem magni quis placeat velit consequuntur eum magnam voluptas est reiciendis mollitia debitis asperiores, eius aspernatur porro accusantium, voluptatibus rem quia?</p>
                     </div>
                      <div className="kurs_btn">
                        <a className='btn_buy bg_gradient' href="#">Sotib olish</a>
                        <a href="#">350 000 UZS</a>
                      </div>
                  </div>
              </div>
              <div className='kurs'>
                  <div className="kurs_top">
                  <a href="#"><img src={_4} alt="" /></a>
                  </div>
                  <div className="kurs_bottom">
                  <div>
                      <h2>Bioximiya</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem magni quis placeat velit consequuntur eum magnam voluptas est reiciendis mollitia debitis asperiores, eius aspernatur porro accusantium, voluptatibus rem quia?</p>
                     </div>
                      <div className="kurs_btn">
                        <a href="#" className='btn_buy bg_gradient'>Sotib olish</a>
                        <a href="#">350 000 UZS</a>
                      </div>
                  </div>
              </div>
          </div>
          <div className='_1 _4'>
              <div className='kurs'>
                  <div className="kurs_top">
                  <a href="#"><img src={_8} alt="" /></a>
                  </div>
                  <div className="kurs_bottom">
                     <div>
                      <h2>Farmakologiya</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem magni quis placeat velit consequuntur eum mag?</p>
                     </div>
                      <div className="kurs_btn">
                        <a className='btn_buy bg_gradient' href="#">Sotib olish</a>
                        <a href="#">350 000 UZS</a>
                      </div>
                  </div>
              </div>
              <div className='kurs'>
                  <div className="kurs_top">
                      <a href="#"><img src={_6} alt="" /></a>
                  </div>
                  <div className="kurs_bottom">
                  <div>
                      <h2>Mikrobiologiya</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem magni quis placeat velit consequuntur a?</p>
                     </div>
                      <div className="kurs_btn">
                        <a href="#" className='btn_buy bg_gradient'>Sotib olish</a>
                        <a href="#">350 000 UZS</a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default List
