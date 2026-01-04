import { useReducer } from "react";

const initialState = { countA: 0, countB: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "incrementA":
      return { ...state, countA: state.countA + 1 };
    case "decrementA":
      return { ...state, countA: state.countA > 0 ? state.countA - 1 : 0 };
    case "incrementB":
      return { ...state, countB: state.countB + 1 };
    case "decrementB":
      return { ...state, countB: state.countB > 0 ? state.countB - 1 : 0 };
    case "reset":
      return initialState;

    default:
      state;
  }
};

export default function Exercise() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>exercise </h1>
      <div className="">
        <h2>counter A</h2>
        <h2>COUNT-A: {state.countA} </h2>
        <button onClick={() => dispatch({ type: "incrementA" })}>
          Increment-A
        </button>
        <button
          onClick={() => dispatch({ type: "decrementA" })}
          disabled={state.countA <= 0}
        >
          Decrement-A
        </button>
      </div>
      <div className="">
        <h2>counter B</h2>
        <h2>COUNT-B: {state.countB}</h2>
        <button onClick={() => dispatch({ type: "incrementB" })}>
          Increment-A
        </button>
        <button
          onClick={() => dispatch({ type: "decrementB" })}
          disabled={state.countB <= 0}
        >
          Decrement-B
        </button>
      </div>

      <button onClick={() => dispatch({ type: "reset" })}>Reset-All</button>
    </>
  );
}
