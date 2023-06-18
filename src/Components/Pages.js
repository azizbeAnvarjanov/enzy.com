import React from 'react'
import { Routes, Route } from "react-router-dom";

import Login from './Login/Login';
import Main from './Main/Main';

function Pages() {

  return (
    <>
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </>
  )
}

export default Pages
