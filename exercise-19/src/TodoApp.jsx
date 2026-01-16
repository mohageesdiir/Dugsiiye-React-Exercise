import React, { useReducer } from "react";
import TodoContext from "./TodoContext";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";
import { initialState, reducer } from "./reducer";

export const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div className="todo-contianer">
        <h2>My To-do List</h2>
        <TodoForm />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
};
