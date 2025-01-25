//----------EXTERNAL IMPORTS
import { BrowserRouter, Routes, Route } from "react-router-dom";


//----------INTERNAL IMPORTS
import "./index.css";


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
           

              
          </Route>
        </Routes>
        </BrowserRouter>
        </Provider>
    );
  
}

export default App;
