import { useState, useEffect } from "react";

export default function UserExercise() {
  const [user, setUser] = useState(null);
  const [inputUser, setInputUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!inputUser) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${inputUser}`);
      if (!response.ok) throw new Error("User not found");
      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="container">
      <h1>Github Users API</h1>
      <div className="search-container">
        <input
          type="text"
          onChange={(e) => setInputUser(e.target.value)}
          onKeyPress={handleKeyPress}
          value={inputUser}
          placeholder="Enter GitHub username"
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      {loading && <h2 className="loading">Loading data...</h2>}

      {error && <p className="error">{error}</p>}

      {user && (
        <div className="user-card">
          <img src={user.avatar_url} alt={user.login} className="avatar" />
          <p>
            <strong>Username: </strong>
            {user.login}
          </p>
          <p>
            <strong>Name: </strong>
            {user.name || "Not specified"}
          </p>
          <p>
            <strong>Bio: </strong>
            {user.bio || "No bio available"}
          </p>
          <p>
            <strong>Followers: </strong>
            {user.followers}
          </p>
          <p>
            <strong>Following: </strong>
            {user.following}
          </p>
          <p>
            <strong>Public Repos: </strong>
            {user.public_repos}
          </p>
        </div>
      )}
    </div>
  );
}
