export default function StepTwo({ state, dispatch }) {
  return (
    <div className="">
      <h2>Step Two</h2>
      <input
        type="email"
        placeholder="ENTER YOUR EMAIL"
        value={state.formDate.email}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "email",
            value: e.target.value,
          })
        }
      />

      <input
        type="password"
        placeholder="ENTER YOUR PASSWORD"
        value={state.formDate.password}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "password",
            value: e.target.value,
          })
        }
      />

      <div className="button-group">
        <button onClick={() => dispatch({ type: "PREV_STEP" })}>PREV</button>
        <button onClick={() => dispatch({ type: "NEXT_STEP" })}>NEXT</button>
      </div>
    </div>
  );
}
