import React, { useState } from "react";
import cartContext from "./CartContext";
import ProductItem from "./ProductItem";
import CartSummary from "./CartSummary";

const App = () => {
  // state
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <cartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      <ProductItem item={{ id: 1, name: "widger", price: 25 }} />
      <ProductItem item={{ id: 2, name: "gadget", price: 30 }} />
      <CartSummary />
    </cartContext.Provider>
  );
};

export default App;
