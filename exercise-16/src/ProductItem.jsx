import React, { useContext } from "react";
import CartContext from "./CartContext";

const ProductItem = ({ item }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}>
      <div className="">
        <h1>product-{item.id}</h1>
        <p>Product name: {item.name}</p>
        <p>price: $ {item.price}</p>

        <button onClick={() => addToCart(item)}>add cart </button>
        <button onClick={() => removeFromCart(item.id)}>remove cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
