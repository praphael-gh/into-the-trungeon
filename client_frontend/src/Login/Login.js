import { useState } from "react";
import "./LoginCSS/Login.css";
const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  const handleNewUserSubmit = (event) => {
    event.preventDefault();
    const formData = {
      username: newUsername,
      password: newPassword,
    };
    fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUsername(newUsername);
        setPassword(newPassword);
      });
  };

  return (
    <>
      <div id="login-page">
        <div id="login">
          <h2>Login</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />

            <br />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div id="trungeon-logo">
              <img
                src={process.env.PUBLIC_URL + "/images/trungeonlogo.png"}
                alt="trungeon-logo"
                id="trungeon-img"
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>

        <br />
        <div id="create-account">
          <h2>Create Account</h2>
          <form onSubmit={(e) => handleNewUserSubmit(e)}>
            <input
              type="text"
              value={newUsername}
              placeholder="New Username"
              onChange={(e) => setNewUsername(e.target.value)}
            />
            <br />
            <input
              type="password"
              value={newPassword}
              placeholder="New Password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <br />
            <input
              type="password"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
            <button type="submit">Create Account</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
