import { Outlet } from "react-router";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="bg-gray-200 h-screen">
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
