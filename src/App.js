import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Productspage from "./Productspage";
import Cartpage from "./Cartpage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Productspage />} />
        <Route path="/cart" element={<Cartpage />} />
      </Routes>
    </>
  );
}

export default App;
