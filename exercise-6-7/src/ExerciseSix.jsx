import { useState, useEffect } from "react";

export default function ExerciseSix() {
  const [title, setTitle] = useState("Welcome");
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `${title}  ${name}`;
    console.log(title);
  }, [title, name]);

  return (
    <div className="">
      <h3>title</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <h3>name</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
