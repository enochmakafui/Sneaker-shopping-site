import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Components/Shop";
import Collections from "./Components/Collections";
import Contact from "./Components/Contact";
import About from "./Components/About";
import ProductDetails from "./Components/ProductDetails";
import CartContextProvider from "./store/ShoppingCartContext";
import Women from "./Components/Women";
import Men from "./Components/Men";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}
export default App;
