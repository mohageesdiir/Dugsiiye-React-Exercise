import React, { useContext } from "react";
import TodoContext from "./TodoContext";

export const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <li class="flex justify-between items-center mb-2.5 border border-[#eee] rounded-lg p-[15px] bg-[#eee]">
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={() =>
          dispatch({
            type: "toggle",
            payload: todo.id,
          })
        }
      >
        {todo.text}
      </span>
      <button
         class="px-3 py-2 rounded-lg bg-[rgba(255,0,0,0.7)] text-white cursor-pointer  hover:bg-[rgba(255,0,0)]"
          onClick={() =>
          dispatch({
            type: "delete",
            payload: todo.id,
          })
        }
      >
        Remove
      </button>
    </li>
  );
};
