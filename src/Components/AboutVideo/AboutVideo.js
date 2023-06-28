import React from 'react'
import './AboutVideo.css'

import ReactPlayer from 'react-player/youtube'

import {MdOutlineDone} from 'react-icons/md'

import { TbTemplate } from 'react-icons/tb'
import { IoEyeSharp, IoExtensionPuzzleOutline } from 'react-icons/io5'


function AboutVideo() {
  return (
    <div className='about_us_box'>

        <div className="about_video_box">
            <div className='div'>
                <ReactPlayer controls className="video" url='https://www.youtube.com/embed/FaR7bnXnRjs' />
            </div>
            <div className='about_txt'>
                <h1>Ezyme o'zi nima</h1> <br />
                <h4>O’zbekistonda tibbiyotni zamonaviy va ohirgi manbalar ya’ni USMLE tizimi asosida o’zlashtirishda ko’maklashuvchi elektron ta’lim platfomasi.</h4>
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
