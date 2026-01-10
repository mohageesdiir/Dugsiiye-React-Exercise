import React, { useContext } from "react";
import TransContext from "./TransContext";

const TransLanguage = () => {
  const languages = useContext(TransContext);

  const language = {
    en: "Hello!",
    es: "Hola!",
  };
  return (
    <div className="">
      <h1>language: {language[languages]}</h1>
    </div>
  );
};

export default TransLanguage;
