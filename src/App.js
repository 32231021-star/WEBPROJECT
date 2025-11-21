import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";

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
      <NavBar cartCount={cart.length} />

      <Routes>
        <Route
          path="/"
          element={
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <h1>Welcome to Mohamad Market</h1>
              <p>Please choose a category from the menu above.</p>
            </div>
          }
        />

        <Route
          path="/breakfast"
          element={<Breakfast addToCart={addToCart} />}
        />
        <Route path="/fruits" element={<Fruit addToCart={addToCart} />} />
        <Route
          path="/dryfood"
          element={<Dryfoods_Pantry addToCart={addToCart} />}
        />
        <Route
          path="/detergent"
          element={<Detergent addToCart={addToCart} />}
        />
        <Route
          path="/cosmetics"
          element={<Cosmetics addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<CartPage cart={cart} removeItem={removeItem} />}
        />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
};

export default App;
