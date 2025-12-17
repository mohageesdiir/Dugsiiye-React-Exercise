// create component

import { useState } from "react";

const ToggleButton = () => {
  const [isTurn, setTurn] = useState("false");

  function toggle() {
    setTurn(!isTurn);
  }

  return (
    <>
      <h1>The Button is {isTurn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>Turn {isTurn ? "OFF" : "ON"}</button>
    </>
  );
};

export default ToggleButton;
