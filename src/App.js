
import Navbar from './Components/Navbar/Navbar'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'

import Login from './Components/Login/Login';
import Pages from './Components/Pages';

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
  <>
    <BrowserRouter>
        <Navbar />
        <Pages />
        <Footer />
    </BrowserRouter>
   </>
  );
}

export default App;


