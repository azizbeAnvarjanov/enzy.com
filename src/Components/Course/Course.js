import { useState } from 'react';
import './Course.css';
import ReactPlayer from 'react-player/youtube'

import { ImPlay } from 'react-icons/im'
import { BsFillFileEarmarkTextFill } from 'react-icons/bs'
import { FaClipboardList } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr'


const data = [
    {
        mavzu: "Embriologiya 1 - dars",
        mavzu_matn: "Mavzu matni 1",
        mavzu_linki: "https://youtu.be/mYyUO4TZHCs?list",
        mavzu_videosi: "Prefertilization: Embriologiya 1-dars USMLE",
        mavzu_testi: "Test",
        mavzu_note: "Note",
        mavzu_note_link: "https://firebasestorage.googleapis.com/v0/b/books-b4672.appspot.com/o/enzyme%2F1.pdf?alt=media&token=e6b5282e-7f34-4086-b121-944dcf630078",
    },
    {
        mavzu: "Embriologiya 2 - dars",
        mavzu_matn: "Mavzu matni 2",
        mavzu_linki: "https://youtu.be/bWTJkTfTNKE?list",
        mavzu_videosi: "Embryology: Fertilization, 2-dars USMLE",
        mavzu_testi: "Test",
        mavzu_note: "Note",
        mavzu_note_link: "https://firebasestorage.googleapis.com/v0/b/books-b4672.appspot.com/o/enzyme%2F2.pdf?alt=media&token=c806b69a-70aa-49b9-9a05-4c7343384924",
    },
    {
        mavzu: "Embriologiya 3 - dars 1 - qism",
        mavzu_matn: "Mavzu matni 3",
        mavzu_linki: "https://youtu.be/4160jljXtns?list",
        mavzu_videosi: "Embriologiya 3 - dars 1 - qism",
        mavzu_testi: "Test",
        mavzu_note: "Note",
        mavzu_note_link: "https://firebasestorage.googleapis.com/v0/b/books-b4672.appspot.com/o/enzyme%2F1.pdf?alt=media&token=e6b5282e-7f34-4086-b121-944dcf630078",
    },
    {
        mavzu: "Embriologiya 3 - dars 2 - qism",
        mavzu_matn: "Mavzu matni 4",
        mavzu_linki: "https://youtu.be/nWokwT6y9d8?list",
        mavzu_videosi: "Embriologiya 3 - dars 2 - qism",
        mavzu_testi: "Test",
        mavzu_note: "Note",
        mavzu_note_link: "https://firebasestorage.googleapis.com/v0/b/books-b4672.appspot.com/o/enzyme%2F1.pdf?alt=media&token=e6b5282e-7f34-4086-b121-944dcf630078",
    },
    {
        mavzu: "Embryology: | 3-dars 2-qism davomi USMLE",
        mavzu_matn: "Mavzu matni 4",
        mavzu_linki: "https://youtu.be/pCuPpdytGj4?list",
        mavzu_videosi: "Embryology: | 3-dars 2-qism davomi USMLE",
        mavzu_testi: "Test",
        mavzu_note: "Note",
        mavzu_note_link: "https://firebasestorage.googleapis.com/v0/b/books-b4672.appspot.com/o/enzyme%2F1.pdf?alt=media&token=e6b5282e-7f34-4086-b121-944dcf630078",
    },
    {
        mavzu: "Cardiovascular: Embriologiya USMLE",
        mavzu_matn: "Mavzu matni 4",
        mavzu_linki: "https://youtu.be/2cPh2LP1NVA?list",
        mavzu_videosi: "Cardiovascular: Embriologiya USMLE",
        mavzu_testi: "Test",
        mavzu_note: "Note",
        mavzu_note_link: "https://firebasestorage.googleapis.com/v0/b/books-b4672.appspot.com/o/enzyme%2F1.pdf?alt=media&token=e6b5282e-7f34-4086-b121-944dcf630078",
    },
    {
        mavzu: "Cardiovascular: Embriologiya USMLE",
        mavzu_matn: "Mavzu matni 4",
        mavzu_linki: "https://youtu.be/G0bKwzq1hmY?list",
        mavzu_videosi: "Cardiovascular: Embriologiya USMLE",
        mavzu_testi: "Test",
        mavzu_note: "Note",
        mavzu_note_link: "https://firebasestorage.googleapis.com/v0/b/books-b4672.appspot.com/o/enzyme%2F1.pdf?alt=media&token=e6b5282e-7f34-4086-b121-944dcf630078",
    },
    {
        mavzu: "Gastrointestinal: Hazm qilish tizimi embriologiyasi 2-qism",
        mavzu_matn: "Mavzu matni 4",
        mavzu_linki: "https://youtu.be/WWrx-Iyei-o?list",
        mavzu_videosi: "Gastrointestinal: Hazm qilish tizimi embriologiyasi 2-qism",
        mavzu_testi: "Test",
        mavzu_note: "Note",
        mavzu_note_link: "https://firebasestorage.googleapis.com/v0/b/books-b4672.appspot.com/o/enzyme%2F1.pdf?alt=media&token=e6b5282e-7f34-4086-b121-944dcf630078",
    },
]


function Course() {
    
    const [selected, setSelected] = useState(0);
    const [video_link, setVideo_link] = useState("https://youtu.be/mYyUO4TZHCs?list");
    const [note, setNote] = useState("https://firebasestorage.googleapis.com/v0/b/books-b4672.appspot.com/o/enzyme%2F1.pdf?alt=media&token=e6b5282e-7f34-4086-b121-944dcf630078");
    const [pdf_class, setPdf_class] = useState(false);

    function change_video(i) {
        setVideo_link(i);
        console.log(i);
    }
    
    function toggle(i, note) {
       
        if (selected === 0) {
            setSelected(0)
        }
        setSelected(i);
        change_link_note(note)
    }
    function change_link_note(i) {
        setNote(i);
    }

    function pdf_opener() {
        if (pdf_class === false) {
            setPdf_class(true);
        }else{
            setPdf_class(false);
        }
    }


  return (
    <>
        <div className="course_box">

            <div className="course_video_box">
                <div className="course_video">
                <ReactPlayer controls className="video" url={video_link} />
                </div>
                <div className="course_comments">
                    <input type="text" name="" id="" placeholder='Izohingizni yozing'/>
                    <a href="#"><FiSend /></a>
                </div>
            </div>  

            <div className="course_theme_lists">
                {
                    data.map((el, i) => (
                        <div key={i} className='acc bg_gradient'>
                            <div className="acc_txt" onClick={() => toggle(i, el.mavzu_note_link)}
                            
                            >
                                <p>{el.mavzu}</p>
                                <span>{selected === i ? "-" : "+"}</span>
                            </div>
                            <div className={selected === i ? "acc_inst active" : "acc_inst"}>
                                <p onClick={() => change_video(el.mavzu_linki)}><ImPlay /> {el.mavzu_videosi}</p>
                                <p onClick={pdf_opener} ><BsFillFileEarmarkTextFill /> {el.mavzu_note}</p>
                                <p><FaClipboardList /> {el.mavzu_testi}</p>
                            </div>
                        </div>
                    ))
                }
            </div>    

            <div className={pdf_class === false ? "pdf_reader" : "pdf_reader active"}>
                <iframe  src={note}></iframe>
                <div className="close_btn_pdf_reader">
                  <GrClose onClick={pdf_opener} />
                </div>
            </div>

        </div> 
    </>
  )
}




export default Course
