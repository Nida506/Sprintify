//----------EXTERNAL IMPORTS
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";

//----------INTERNAL IMPORTS
import "./index.css";
import Body from "./Pages/Body/Body";
import SignUp from "./Pages/Signup/SignUp";
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Body />}>
          <Route  path='/'  element={ <LandingPage/>} />
          <Route path='/signup' element={ <SignUp/>} />
          <Route path='/faqs' element={<Faqs/>}/>
          <Route path='/home' element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
