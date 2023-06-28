import React from 'react'
import { Routes, Route } from "react-router-dom";
import Course from './Course/Course';

import Login from './Login/Login';
import Main from './Main/Main';
import Platform from './Platform/Platform';

function Pages() {

  return (
    <>
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/course" element={<Course />} />
        </Routes>
    </>
  )
}

export default Pages
    