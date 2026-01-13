import React, { useState } from "react";

const useForm = (formValue) => {
  const [values, setValues] = useState(formValue);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return { values, handleChange };
};

export default useForm;
