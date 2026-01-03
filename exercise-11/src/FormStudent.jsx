import { useState } from "react";

const FormStudent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIslogin] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username) {
      setIslogin(true);
    }
  };

  const handleLogout = () => {
    setIslogin("");
    setPassword("");
    setIslogin(false);
  };

  if (isLogin) {
    return (
      <div className="container">
        <h1>Welcome {username}</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div className="">
      <form onSubmit={handleLogin}>
        <h1>log in </h1>
        <input
          type="text"
          placeholder="Plear Enter Username"
          required
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <br />
        <input
          type="password"
          placeholder="Please Enter password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <button type="submit" onClick={handleLogin}>
          LogIn
        </button>
      </form>
      {isLogin && <p>You welcome </p>}
    </div>
  );
};

export default FormStudent;
