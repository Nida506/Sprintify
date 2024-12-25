//----------EXTERNAL IMPORTS
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";

//----------INTERNAL IMPORTS
import './index.css';
import Body from './Pages/Body/Body';
import SignUp from "./Pages/Signup/SignUp";
import Faqs from './Pages/FAQS/FAQS';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

function App() {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Set default animation duration
      easing: 'ease-out-back', // Set easing function
      once: true, // Trigger animation only once
    });
  }, []);

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Body />}>
          <Route path='/signup' element={ <SignUp/>} />
          <Route path='/faqs' element={<Faqs></Faqs>}></Route>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
