import React from 'react'
import './AboutVideo.css'

import {MdOutlineDone} from 'react-icons/md'

import { TbTemplate } from 'react-icons/tb'
import { IoEyeSharp, IoExtensionPuzzleOutline } from 'react-icons/io5'


function AboutVideo() {
  return (
    <div className='about_us_box'>

        <div className="about_video_box">
            <div>
                <iframe width="885" height="498" src="https://www.youtube.com/embed/FaR7bnXnRjs" title="Sinapslar I fiziologiya 2-qism" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='about_txt'>
                <h1>Ezyme o'zi nima</h1> <br />
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit unde impedit beatae sint dolorum. Expedita pariatur deleniti tenetur non labore dolores laborum possimus saepe hic perferendis at architecto, fuga modi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit unde impedit beatae sint dolorum. Expedita pariatur deleniti tenetur non labore dolores laborum possimus saepe hic perferendis at architecto, fuga modi</h4>
                <br />
                <p> <MdOutlineDone /> Darsning video yozuvi</p>
                <p> <MdOutlineDone /> Noyob usul</p>
                <p> <MdOutlineDone /> Qulay muhit</p>
            </div>
        </div>


        <div className="skills">
            <div className='skills_box'>
                <div className="skill">
                   <div className="skill_info">
                      <TbTemplate />
                      <h1>PLATFORMA</h1>
                      <p>O’zbekiston tibbiyot sohasi  talabalari, ordinator-magistrlari  hamda shifokorlari uchun  elektron tibbiy ta’lim  platformasini joriy qilish;</p>
                   </div>
                </div>
                <div className="skill">
                   <div className="skill_info">
                      <IoEyeSharp />
                      <h1>DARSLAR</h1>
                      <p>YouTube, Telegram va instagram kabi ommabop tarmoqlarda darslarni yurutib borish;</p>
                   </div>
                </div>
                <div className="skill">
                   <div className="skill_info">
                     <IoExtensionPuzzleOutline />
                      <h1>KEYSLAR</h1>
                      <p>Mualliflik kitoblar; notelar; vaziyatli masalalar; test va boshqa materiallar bilan ta’minlash</p>
                   </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default AboutVideo