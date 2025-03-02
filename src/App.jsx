import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aos from "aos";
import { Provider } from "react-redux";
import "aos/dist/aos.css";
import { useEffect } from "react";
import store from "./Redux/Store";

//----------INTERNAL IMPORTS
import Body from "./Pages/Body/Body";
import Dashboards from "./Pages/Dashboards/Dashboards";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import AboutUs from "./Pages/About/AboutUs"; // Ensure correct path
import "./index.css";
import Blog from "./Pages/Blog/Blog";
import WorkPlace from "./Pages/WorkPlace/WorkPlace";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  console.log("I am configuring");

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/dashboards" element={<Dashboards />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/workplace" element={<WorkPlace/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<AboutUs />} /> {/* Added About Us */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
