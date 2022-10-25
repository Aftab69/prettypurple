import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Productspage from "./Productspage";
import Cartpage from "./Cartpage";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Pretty Purple Store</title>
        <meta name="description" content="Pretty Purple is an e-commerce website where you can purchase earrings, necklaces, keyrings and other sorts of jewellery." />
        <meta name="keywords" content="pretty purple, pretty purple store, jewellery shop, online store, earrings, neklaces, keyrings" />
      </Helmet>
      <Navbar />
      <Routes>
        <Route path="/" element={<Productspage />} />
        <Route path="/cart" element={<Cartpage />} />
      </Routes>
    </>
  );
}

export default App;
