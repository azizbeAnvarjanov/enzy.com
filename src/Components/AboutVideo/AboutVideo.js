import React from 'react'
import './AboutVideo.css'

import ReactPlayer from 'react-player/youtube'

import {MdOutlineDone} from 'react-icons/md'

import { TbTemplate } from 'react-icons/tb'
import { IoExtensionPuzzleOutline } from 'react-icons/io5'
import { FaBookOpen } from 'react-icons/fa'

function AboutVideo() {
  return (
    <div className='about_us_box'>

        <div className="about_video_box">
            <div className='div'>
                <ReactPlayer controls className="video" url='https://youtu.be/0VHtxPc0m-4' />
            </div>
            <div className='about_txt'>
                <h1>Ezyme o'zi nima</h1> <br />
                <h4>O’zbekistonda tibbiyotni zamonaviy va ohirgi manbalar ya’ni USMLE tizimi asosida o’zlashtirishda ko’maklashuvchi elektron ta’lim platfomasi.</h4>
                <br />
                <p> <MdOutlineDone /> Darsning video yozuvi</p>
                <p> <MdOutlineDone /> Noyob usul</p>
                <p> <MdOutlineDone /> Qulay muhit</p>
                <a className='bg_gradient' href="#">Batafsil</a>
            </div>
        </div>


        <div className="skills">
            <div className='skills_box'>
                <div className="skill">
                   <div className="skill_info">
                      <div className="skill_icon">
                        <TbTemplate />
                      </div>
                      <h1>PLATFORMA</h1>
                      <p>O’zbekiston tibbiyot sohasi  talabalari, ordinator-magistrlari  hamda shifokorlari uchun  elektron tibbiy ta’lim  platformasini joriy qilish;</p>
                   </div>
                </div>
                <div className="skill">
                   <div className="skill_info">
                        <div className="skill_icon">
                            <FaBookOpen />
                        </div>
                      <h1>DARSLAR</h1>
                      <p>YouTube, Telegram va instagram kabi ommabop tarmoqlarda darslarni yurutib borish;</p>
                   </div>
                </div>
                <div className="skill">
                   <div className="skill_info">
                    <div className="skill_icon">
                        <IoExtensionPuzzleOutline />
                    </div>
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
