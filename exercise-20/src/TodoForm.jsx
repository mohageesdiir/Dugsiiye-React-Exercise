import React, { useState, useContext } from "react";
import TodoContext from "./TodoContext";

export const TodoForm = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TodoContext);
  const handleAdd = () => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };
      dispatch({
        type: "add",
        payload: newTodo,
      });
      setText("");
    }
  };
  return (
    <div className="flex gap-4">
      <input
        class="p-2.5 w-[250px] rounded-lg border border-[rgba(51,51,51,0.5)]"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="ENTER NEW TODO "
      />

      <button 
        class="px-[15px] py-2.5 rounded-md bg-[rgba(137,43,226,0.7)] text-white cursor-pointer hover:bg-[rgba(137,43,226)]" 
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};
