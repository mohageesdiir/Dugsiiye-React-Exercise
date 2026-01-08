import { useReducer, useEffect } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const intialState = {
  step: 1,
  formDate: {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formDate: {
          ...state.formDate,
          [action.field]: action.value,
        },
      };

    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };

    case "PREV_STEP":
      return { ...state, step: state.step - 1 };

    default:
      return state;
  }
};

export default function MultiStepForm() {
  const [state, dispatch] = useReducer(reducer, intialState);

  useEffect(() => {
    dispatch({
      type: "UPDATE_FIELD",
      field: "first_name",
      value: "",
    });
  }, []);

  return (
    <div className="form-container">
      {state.step === 1 && <StepOne state={state} dispatch={dispatch} />}
      {state.step === 2 && <StepTwo state={state} dispatch={dispatch} />}
      {state.step === 3 && <StepThree state={state} />}
    </div>
  );
}
