import { BrowserRouter, Routes ,Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LayOut from "./components/Layout";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <div className="App font-Poppins">

    <BrowserRouter >

        <Routes>

          <Route path="/"  element={<LayOut/>}>
            
            <Route index element={<HomePage />}/>

          </Route>
        
        </Routes>

    </BrowserRouter>
         
        
    </div>
  );
}

export default App;
