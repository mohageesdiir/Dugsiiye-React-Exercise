import { useContext } from "react";
import CartContext from "./CartContext";

const CartSummary = () => {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ marginTop: 20 }}>
      <h2>Cart Summary</h2>
      <p>Total Items: {cartItems.length}</p>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
};

export default CartSummary;
