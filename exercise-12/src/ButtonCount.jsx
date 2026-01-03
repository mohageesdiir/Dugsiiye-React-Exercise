import { useState } from "react";

const ButtonCount = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Exercise-12</h1>
      <h1>COUNT: {count}</h1>
      <button onClick={handleDecrement} disabled={count === 0}>
        Decrement
      </button>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
};

export default ButtonCount;
