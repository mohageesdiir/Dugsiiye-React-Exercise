import React, { useContext } from "react";
import FormContext from "./FormContext";

export const ContectItem = ({ contect }) => {
  const { dispatch } = useContext(FormContext);
  return (
    <li>
      <p>
        {contect.text}
        {contect.favorite && <span> ⭐</span>}
      </p>

      <p>{contect.email}</p>
      <p>{contect.number}</p>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: "toggleFavorite",
              payload: contect.id,
            })
          }
        >
          {" "}
          favorite
        </button>
        <button
          onClick={() => {
            const newName = prompt("Edit name", contect.text);
            if (!newName) return;

            dispatch({
              type: "edit",
              payload: {
                ...contect,
                text: newName,
              },
            });
          }}
        >
          edit
        </button>

        <button
          onClick={() =>
            dispatch({
              type: "delete",
              payload: contect.id,
            })
          }
        >
          delete
        </button>
      </div>
    </li>
  );
};
