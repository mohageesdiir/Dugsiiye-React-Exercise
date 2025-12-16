import StudentCard from "./StudentCard";

function App() {
  return (
    <>
      <StudentCard
        name={"mustaf cali"}
        email={"mustaf21@gmail.com"}
        class={"A-12"}
        isPay={true}
      />

      <StudentCard
        name={"xawo yusuf"}
        email={"xawo1@gmail.com"}
        class={"C-09"}
        isPay={false}
      />
      <StudentCard
        name={"cumar axmed"}
        email={"cumar00@gmail.com"}
        class={"B-12"}
        isPay={true}
      />
    </>
  );
}

export default App;
