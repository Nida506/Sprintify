//----------EXTERNAL IMPORTS
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";

//----------INTERNAL IMPORTS
import './index.css';
import Body from './Features/Body/Body';
import SignUp from "./Features/Signup/SignUp";
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Body />}>
          <Route path='/signup' element={ <SignUp/>} />
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
