//----------EXTERNAL IMPORTS
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aos from 'aos';
import { Provider } from 'react-redux';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import store from './Redux/Store';
//----------INTERNAL IMPORTS
import Body from './Pages/Body/Body';
//----------INTERNAL IMPORTS
import './index.css';
import Dashboards from './Pages/Dashboards/Dashboards';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  console.log('I am configuting');
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path='/dashboards' element={<Dashboards />}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
