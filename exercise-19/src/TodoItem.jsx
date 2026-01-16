import React, { useContext } from "react";
import TodoContext from "./TodoContext";

export const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <li>
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
        className="btn-delete"
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
