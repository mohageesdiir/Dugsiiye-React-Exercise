import useForm from "./useForm";

export const ContectForm = () => {
  const { values, handleChange } = useForm({
    name: "",
    email: "",
    message: "",
    number: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello", values);
    values: "";
    alert("form submited");
  };

  return (
    <form className="contect-form">
      <div className="">
        <label htmlFor="">Name : </label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="PLEASE ENTER YOUR NAME"
        />
      </div>

      <div className="">
        <label htmlFor="">Email : </label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="PLEASE ENTER YOUR EMAIL"
        />
      </div>
      <div className="">
        <label htmlFor="">Password : </label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="PLEASE ENTER YOUR PASSWORD"
        />
      </div>
      <div className="">
        <label htmlFor="">Number : </label>
        <input
          type="number"
          name="number"
          value={values.number}
          onChange={handleChange}
          placeholder="PLEASE ENTER YOUR NUMBER"
        />
      </div>

      <button type="submit" onClick={handleSubmit}>
        submit
      </button>
    </form>
  );
};
