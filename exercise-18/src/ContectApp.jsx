import React, { useReducer } from "react";
import FormContext from "./FormContext";
import { ContectForm } from "./ContectForm";
import { ContectList } from "./ContectList";
import { reducer, initialState } from "./reducer";

export const ContectApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      ContectApp:
      <ContectForm />
      <ContectList />
    </FormContext.Provider>
  );
};
