import React, { useState, useContext } from "react";
import FormContext from "./FormContext";

export const ContectForm = () => {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const { dispatch } = useContext(FormContext);
  const handleAdd = (e) => {
    e.preventDefault();
    if (text.trim()) {
      const newContect = {
        id: Date.now(),
        text,
        email,
        number,
        favorite: false,
      };
      dispatch({
        type: "add",
        payload: newContect,
      });
      setText("");
      setEmail("");
      setNumber("");
    }
  };

  return (
    <form action="">
      <div>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="ENTER NAME"
        />
      </div>
      <div>
        <label htmlFor="">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ENTER EMAIL"
        />
      </div>
      <div>
        <label htmlFor="">Number:</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="ENTER NUMBER"
        />
      </div>
      <button onClick={handleAdd}>add</button>
    </form>
  );
};
