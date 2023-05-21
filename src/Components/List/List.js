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
            <h3>1.</h3>
            <div className="logo">
              <img src={CellBiology} alt="" />
            </div>
            <h2>Cell biology</h2>
            <a href="#">O'qish</a>
          </div>

          <div className='Science'>
            <h3>2.</h3>
            <div className="logo">
              <img src={Embryology} alt="" />
            </div>
            <h2>Embryology</h2>
            <a href="#">O'qish</a>
          </div>

          <div className='Science'>
            <h3>3.</h3>
            <div className="logo">
              <img src={Anatomy} alt="" />
            </div>
            <h2>Anatomy</h2>
            <a href="#">O'qish</a>
          </div>

          <div className='Science'>
            <h3>4.</h3>
            <div className="logo">
              <img src={Neuroanatomy} alt="" />
            </div>
            <h2>Neuroanatomy</h2>
            <a href="#">O'qish</a>
          </div>

          <div className='Science'>
            <h3>5.</h3>
            <div className="logo">
              <img src={Physiology} alt="" />
            </div>
            <h2>Physiology</h2>
            <a href="#">O'qish</a>
          </div>

          <div className='Science'>
            <h3>6.</h3>
            <div className="logo">
              <img src={Biochemistry} alt="" />
            </div>
            <h2>Biochemistry</h2>
            <a href="#">O'qish</a>
          </div>

          <div className='Science'>
            <h3>7.</h3>
            <div className="logo">
              <img src={Pharmacology} alt="" />
            </div>
            <h2>Pharmacology</h2>
            <a href="#">O'qish</a>
          </div>

          <div className='Science'>
            <h3>8.</h3>
            <div className="logo">
              <img src={Microbiology} alt="" />
            </div>
            <h2>Microbiology</h2>
            <a href="#">O'qish</a>
          </div>

          <div className='Science'>
            <h3>9.</h3>
            <div className="logo">
              <img src={Immunology} alt="" />
            </div>
            <h2>Immunology</h2>
            <a href="#">O'qish</a>
          </div>

          <div className='Science'>
            <h3>10.</h3>
            <div className="logo">
              <img src={Pathology} alt="" />
            </div>
            <h2>Pathology</h2>
            <a href="#">O'qish</a>
          </div>

        </div>
    </div>
  )
}

export default List
