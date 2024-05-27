import { Routes,Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";



const App = () => {
  return(
    <div>
        <div className="bg-slate-900">
        <Navbar>
        
        </Navbar>
        </div>

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
    </div>
  );
};

export default App;
