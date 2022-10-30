import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import NotFound from './components/NotFound/NotFound';
import CheckOut from './components/CheckOut/CheckOut';
import Footer from './components/Footer/Footer';
import "./assets/css/app.css"


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div>
          <NavBar />
          <Routes>
            <Route index path="/" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/categoria/:categoria" element={<ItemListContainer />} />
            <Route path="/rescates" element={<ItemDetailContainer />} />
            <Route path="/about" element={<ItemDetailContainer />} />
            <Route path="/contact" element={<ItemDetailContainer />} />
            <Route path="/ayuda" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/checkout/:id" element={<CheckOut />} />
            <Route path="*" element={<Navigate to="/404" />} />
            <Route path="/404" element={<NotFound />} />
          </Routes>
        </div>
      </CartProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
