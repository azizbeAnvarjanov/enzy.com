import React from 'react'

import img from '../../imgs/aaa.png'
import Anatomy from '../../imgs/Scienses imgs/Anatomy.jpg'
import Biochemistry from '../../imgs/Scienses imgs/Biochemistry.png'
import CellBiology from '../../imgs/Scienses imgs/Cell biology.jpeg'
import Embryology from '../../imgs/Scienses imgs/Embryology 22.png'
import Immunology from '../../imgs/Scienses imgs/Immunology.png'
import Microbiology from '../../imgs/Scienses imgs/Microbiology.jpg'
import Neuroanatomy from '../../imgs/Scienses imgs/Neuroanatomy.jpg'
import Pathology from '../../imgs/Scienses imgs/Pathology.jpg'
import Pharmacology from '../../imgs/Scienses imgs/Pharmacology.png'
import Physiology from '../../imgs/Scienses imgs/Physiology.png'

function List() {
  return (
    <div className='list'>
        <h1>Step 1</h1>
        <div className="list_box">

          <div className='Science'>
            <div className="logo">
              <img src={CellBiology} alt="" />
            </div>
            <h2>Hujayra biologiyasi</h2>
          </div>

          <div className='Science'>
            <div className="logo">
              <img src={Embryology} alt="" />
            </div>
            <h2>Embriologiya</h2>
          </div>

          <div className='Science'>
            <div className="logo">
              <img src={Anatomy} alt="" />
            </div>
            <h2>Anatomiya</h2>
          </div>

          <div className='Science'>
            <div className="logo">
              <img src={Neuroanatomy} alt="" />
            </div>
            <h2>Neyroanatomiya</h2>
          </div>

          <div className='Science'>
            <div className="logo">
              <img src={Physiology} alt="" />
            </div>
            <h2>Fiziologiya</h2>
          </div>

          <div className='Science'>
            <div className="logo">
              <img src={Biochemistry} alt="" />
            </div>
            <h2>Bioximiya</h2>
          </div>

          <div className='Science'>
            <div className="logo">
              <img src={Pharmacology} alt="" />
            </div>
            <h2>Farmakologiya</h2>
          </div>

          <div className='Science'>
            <div className="logo">
              <img src={Microbiology} alt="" />
            </div>
            <h2>Mikrobiologiya</h2>
          </div>

          <div className='Science'>
            <div className="logo">
              <img src={Immunology} alt="" />
            </div>
            <h2>Immunologiya</h2>
          </div>

          <div className='Science'>
            <div className="logo">
              <img src={Pathology} alt="" />
            </div>
            <h2>Patalogiya</h2>
          </div>

        </div>
    </div>
  )
}

export default List
