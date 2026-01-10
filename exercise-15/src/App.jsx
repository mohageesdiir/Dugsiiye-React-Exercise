import TransContext from "./TransContext";
import TransLanguage from "./TransLanguage";
import { useState } from "react";

function App() {
  const [languages, setLanguages] = useState("en");

  const toggleChange = () => {
    // console.log("heee", toggleChange);
    setLanguages((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <TransContext.Provider value={languages}>
      <button onClick={toggleChange}>
        tranlate {languages === "en" ? "Spanish" : "English"}
      </button>
      <TransLanguage />
    </TransContext.Provider>
  );
}

export default App;
