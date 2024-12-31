//----------EXTERNAL IMPORTS
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { Provider } from "react-redux";

//----------INTERNAL IMPORTS
import "./index.css";
import Body from "./Pages/Body/Body";
import SignUp from "./Pages/Signup/SignUp";
import LandingPage from "./Pages/LandingPage/landingPage";
import Faqs from "./Pages/FAQS/FAQS";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Reporting from "./Pages/Reporting/Reporting";
import { useEffect } from "react";
import store from "./Redux/Store";
import Dashboards from "./Pages/Dashboards/Dashboards";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  console.log("I am configuting");
    return (
        <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body />}>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
         <Route path='/' element={<LandingPage />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/faqs' element={<Faqs />} />
            <Route path='/home' element={<Home />} />
              <Route path="/dashboards" element={<Dashboards />} /> 
              <Route path="reporting"element={<Reporting />} />

              
          </Route>
        </Routes>
        </BrowserRouter>
        </Provider>
    );
  
}

export default App;
