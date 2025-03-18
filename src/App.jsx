import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aos from "aos";
import { Provider } from "react-redux";
import "aos/dist/aos.css";
import { useEffect } from "react";
import store from "./Redux/Store";
import { lazy, Suspense } from "react";

//----------INTERNAL IMPORTS
import Body from "./Pages/Body/Body";
import Dashboards from "@/Pages/Dashboards/Dashboards";
// import LandingPage from "./Pages/LandingPage/LandingPage";
import Login from "./Pages/Login/Login";
import AboutUs from "./Pages/About/AboutUs"; // Ensure correct path
import "./index.css";
import Blog from "./Pages/Blog/Blog";
import WorkPlace from "./Pages/WorkPlace/WorkPlace";
import Chart from "./Pages/Chart/Chart";
import Profile from "./Pages/Profile/Profile";

import Homepage from "./Pages/Homepage/Homepage";
import Signup from "./Pages/Signup/SignUp";

function App() {
  const ResetPassword = lazy(() =>
    import("./Pages/ForgetPassword/ForgetPassword")
  );

  const Contactus = lazy(() => import("./Pages/Contactus/Contactus"));

  useEffect(() => {
    Aos.init({
      duration: 1200, // Global animation duration (in ms)
      easing: "ease-in-out", // Global easing function
      once: true, // Only trigger animation once
      offset: 200, // Trigger animations when scrolled 200px from the bottom
    });
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/dashboards" element={<Dashboards />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/workplace" element={<WorkPlace />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<AboutUs />} /> {/* Added About Us */}
            <Route path="/contactus" element={<Contactus />} />{" "}
            {/* Added About Us */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
