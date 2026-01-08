export default function StepOne({ state, dispatch }) {
  return (
    <div className="">
      <h1>Step One </h1>
      <input
        type="text"
        placeholder="ENTET FIRST NAME"
        value={state.formDate.first_name}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "first_name",
            value: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="ENTET LAST NAME"
        value={state.formDate.last_name}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "last_name",
            value: e.target.value,
          })
        }
      />

      <button onClick={() => dispatch({ type: "NEXT_STEP" })}>Next</button>
    </div>
  );
}
