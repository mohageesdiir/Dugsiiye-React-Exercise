export default function StepThree({ state }) {
  return (
    <div className="">
      <h1>Step Three</h1>
      <p>first name : {state.formDate.first_name}</p>
      <p>last name : {state.formDate.last_name}</p>
      <p>Email : {state.formDate.email}</p>
      <div className="button-group">
        <button onClick={() => dispatch({ type: "PREV_STEP" })}>PREV</button>
        <button
          className="confirm-button"
          onClick={() => alert("Form Submitted!")}
        >
          CONFIRM
        </button>
      </div>
    </div>
  );
}
