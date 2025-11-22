import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

import NavBar from "./Components/NavBar";
import Home from "./pages/Home";

import Breakfast from "./pages/Breakfast";
import Detergent from "./pages/Detergent";
import Dryfoods_Pantry from "./pages/Dryfoods_Pantry";
import Fruit from "./pages/Fruits";
import Cosmetics from "./pages/Cosmetics";

import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import SuccessPage from "./pages/SuccessPage";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, qty, price) => {
    setCart([...cart, { ...product, qty, price }]);
    alert(`${product.name} added to cart`);
  };

  const removeItem = (name) => {
    setCart(cart.filter((item) => item.name !== name));
  };

  return (
    <Router>

      <Routes>

        {/* ---------- HOME PAGE (NO NAVBAR) ---------- */}
        <Route path="/" element={<Home />} />

        {/* ---------- PAGES WITH NAVBAR ---------- */}
        <Route
          path="/breakfast"
          element={
            <>
              <NavBar cartCount={cart.length} />
              <Breakfast addToCart={addToCart} />
            </>
          }
        />

        <Route
          path="/fruits"
          element={
            <>
              <NavBar cartCount={cart.length} />
              <Fruit addToCart={addToCart} />
            </>
          }
        />

        <Route
          path="/dryfood"
          element={
            <>
              <NavBar cartCount={cart.length} />
              <Dryfoods_Pantry addToCart={addToCart} />
            </>
          }
        />

        <Route
          path="/detergent"
          element={
            <>
              <NavBar cartCount={cart.length} />
              <Detergent addToCart={addToCart} />
            </>
          }
        />

        <Route
          path="/cosmetics"
          element={
            <>
              <NavBar cartCount={cart.length} />
              <Cosmetics addToCart={addToCart} />
            </>
          }
        />

        <Route
          path="/cart"
          element={
            <>
              <NavBar cartCount={cart.length} />
              <CartPage cart={cart} removeItem={removeItem} />
            </>
          }
        />

        <Route
          path="/checkout"
          element={
            <>
              <NavBar cartCount={cart.length} />
              <Checkout cart={cart} />
            </>
          }
        />

        <Route
          path="/success"
          element={
            <>
              <NavBar cartCount={cart.length} />
              <SuccessPage />
            </>
          }
        />

      </Routes>
    </Router>
  );
};

export default App;
