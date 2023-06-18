import React from 'react'
import { useState , useEffect} from 'react';
import './Login.css'

import login_img from '../../imgs/Mobile login-bro.png'

function Login() {

    
    const [islogin, setLogin] = useState(true);
    const [isregister, setRegister] = useState(false);


    function is_login() {
        setLogin(true);
        setRegister(false)
    }
    function is_register() {
        setLogin(false);
        setRegister(true)
    }

  return (
    <>
        <div className="login_page">
            <div className='login_img'>
                <img src={login_img} alt="" />
            </div>
            <div className='page_elements'>

                <div className={ islogin ? "login_box active": "login_box" }>
                    <h1>Kirish</h1>
                    <div>
                        <label>Tel raqam:</label>
                        <input type="number"/>
                    </div>
                    <div>
                        <label>Parol:</label>
                        <input type="password" placeholder='Parolingizni kiriiting'/>
                    </div>
                    
                   <div>
                    <a href="#" className='login_btn'>Kirish</a>
                    <br />
                        <a href="#" onClick={is_register}>Royhatdan o'tish</a>
                   </div>
                </div>


                <div className={ isregister ? "register_box active": "register_box" }>
                    <h1>Ro'yhatdan o'tish</h1>
                    <div>
                        <label>Ism</label>
                        <input type="number" placeholder='Ismingizni yozing'/>
                    </div>
                    <div>
                        <label>Familiya</label>
                        <input type="password" placeholder='Familiyangizni yozing'/>
                    </div>
                    <div>
                        <label>Tel raqam:</label>
                        <input type="number"/>
                    </div>
                    <div>
                        <label>Parol:</label>
                        <input type="password" placeholder='Parolingizni kiriiting'/>
                    </div>
                    
                    <div>
                        <a href="#" className='register_btn'>Royhatdan o'tish</a> <br />
                        <a href="#" onClick={is_login}>Kirish</a>
                    </div>
                    
                    
                    
                   
                    
                </div>
            </div>
        </div> 
    </>
  )
}

export default Login
