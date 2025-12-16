const StudentCard = (props) => {
  return (
    <div className="Student">
      <p>Student name: {props.name}</p>
      <p>Student email: {props.email}</p>
      <p>Student class: {props.class}</p>
      <p>Student fee: {props.isPay ? "Yes" : "No"}</p>
    </div>
  );
};

export default StudentCard;
