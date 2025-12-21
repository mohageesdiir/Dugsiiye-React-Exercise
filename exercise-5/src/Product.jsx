import { useState } from "react";

export default function Product() {
  // first state product cart
  const [productCarts, setProductCarts] = useState([]);
  // second state user
  const [inputValue, setInputValue] = useState({
    product: "",
    price: "",
    quantity: "",
  });
  // thrid state autput

  const handleAddCart = (e) => {
    e.preventDefault();
    console.log(inputValue);

    // create object for product
    const newProduct = {
      id: crypto.randomUUID(),
      text: inputValue.product,
      price: Number(inputValue.price),
      quantity: Number(inputValue.quantity),
      completed: false,
    };
    console.log(newProduct);
    setProductCarts([...productCarts, newProduct]);
    setInputValue({ product: "", price: "", quantity: "" });
  };

  const handleRemove = (id) => {
    setProductCarts(productCarts.filter((product) => product.id !== id));
  };

  return (
    <div className="container">
      <h1>Simple Shopping Cart </h1>
      <form className="">
        <h2>Add to product </h2>
        <input
          type="text"
          name="product"
          placeholder="Product name"
          onChange={(e) =>
            setInputValue({ ...inputValue, product: e.target.value })
          }
          value={inputValue.product}
        />
        <input
          type="text"
          name="price"
          placeholder="Price "
          onChange={(e) =>
            setInputValue({ ...inputValue, price: Number(e.target.value) })
          }
          value={inputValue.price}
        />

        <input
          type="text"
          name="quantity"
          placeholder="quantity"
          onChange={(e) =>
            setInputValue({ ...inputValue, quantity: Number(e.target.value) })
          }
          value={inputValue.quantity}
        />

        <button onClick={handleAddCart}>Add To Cart</button>
      </form>
      <div className="">
        <h2>Products in Cart </h2>
        <ul>
          {productCarts.map((productCart) => (
            // <li>{productCart.text}</li>
            <li key={productCart.id}>
              <strong>Product:</strong> {productCart.text}
              <strong>Price:</strong> {productCart.price}
              <strong>Quantity</strong> {productCart.quantity}
              <strong>Line total:</strong> $
              {Number(productCart.price) * Number(productCart.quantity)}
            </li>
          ))}
        </ul>
      </div>
      <div className="total">
        <ul>
          <h2>total Products</h2>
          {productCarts.map((productCart) => (
            // <li>{productCart.text}</li>
            <li key={productCart.id}>
              <strong>Product:</strong> {productCart.text}
              <strong>Line total:</strong> $
              {Number(productCart.price) * Number(productCart.quantity)}
              <button onClick={() => handleRemove(productCart.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
