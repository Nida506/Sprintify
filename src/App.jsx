import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aos from 'aos';
import { Provider } from 'react-redux';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import store from './Redux/Store';
import { lazy, Suspense } from 'react';

//----------INTERNAL IMPORTS
import Body from './Pages/Body/Body';
import Dashboards from './Pages/Dashboards/Dashboards';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import AboutUs from './Pages/About/AboutUs'; // Ensure correct path
import './index.css';
import Blog from './Pages/Blog/Blog';
import WorkPlace from './Pages/WorkPlace/WorkPlace';
import Chart from './Pages/Chart/Chart';
import Spinner from './ReuseableComponents/Loading/Spinner';
import ChatPage from './Pages/ChatPage/ChatPage';

function App() {
  const ResetPassword = lazy(() =>
    import('./Pages/ForgetPassword/ForgetPassword')
  );

  const Contactus = lazy(() => import('./Pages/Contactus/Contactus'));

  useEffect(() => {
    Aos.init({
      duration: 1200, // Global animation duration (in ms)
      easing: 'ease-in-out', // Global easing function
      once: true, // Only trigger animation once
      offset: 200, // Trigger animations when scrolled 200px from the bottom
    });
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/dashboards" element={<Dashboards />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/forgot-password"
              element={
                <Suspense fallback={<Spinner />}>
                  <ResetPassword />
                </Suspense>
              }
            />
            <Route path="/blog" element={<Blog />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/workplace" element={<WorkPlace />} />
            <Route path="/Contactus" element={<Suspense fallback={<Spinner />}>
                  <Contactus/>
                </Suspense>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<AboutUs />} /> {/* Added About Us */}
          
          <Route path="/ChatPage" element={<ChatPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
