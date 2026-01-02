// import { useState } from "react";
const NewList = () => {
  const students = ["cali", "fatma", "xasan"];

  return (
    <div className="">
      <h1>student list 2026</h1>
      {students.length > 0 ? (
        <ul>
          {students.map((student) => (
            <li key={student}>{student}</li>
          ))}
        </ul>
      ) : (
        <p>no new students</p>
      )}
    </div>
  );
};

export default NewList;
