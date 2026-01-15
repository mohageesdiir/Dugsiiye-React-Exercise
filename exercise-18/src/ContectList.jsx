import React, { useContext } from "react";
import FormContext from "./FormContext";
import { ContectItem } from "./ContectItem";

export const ContectList = () => {
  const { state } = useContext(FormContext);

  return (
    <ul>
      {state.map((contect) => (
        <ContectItem key={contect.id} contect={contect} />
      ))}
    </ul>
  );
};
