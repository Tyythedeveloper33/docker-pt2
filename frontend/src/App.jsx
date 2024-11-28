import { useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "/api";
axios.defaults.withCredentials = true;

import "./index.css";

function App() {
  const [user, setUser] = useState(null);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupMessage, setSignupMessage] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setSignupMessage("");

    const newUser = {
      email: signupEmail,
      password: signupPassword,
    };

    try {
      const res = await axios.post("/register", newUser);

      if (res.status === 201) {
        setSignupMessage("Successfully registered!");
      } else {
        setSignupMessage(res.data?.error || "An error occurred.");
      }
    } catch (error) {
      setSignupMessage(error.response?.data?.error || "An error occurred.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginMessage("");

    const existingUser = {
      email: loginEmail,
      password: loginPassword,
    };

    try {
      const res = await axios.post("/log-in", existingUser);

      if (res.status === 200) {
        setUser(res.data);
        setLoginMessage("Login successful!");
      } else {
        setLoginMessage("Invalid email or password.");
      }
    } catch (error) {
      setLoginMessage(error.response?.data?.error || "Invalid email or password.");
    }
  };

  return (
    <main>
      <h1>Authentication App</h1>
      <br />

      <div>
        <h2>Login to see your info</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="LoginEmail">
            Email
            <input
              type="email"
              id="LoginEmail"
              placeholder="Enter email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
            />
          </label>

          <label htmlFor="LoginPassword">
            Password
            <input
              type="password"
              id="LoginPassword"
              placeholder="Enter password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
          </label>

          <button type="submit">Login</button>
        </form>
        <p>{loginMessage && <span>{loginMessage}</span>}</p>
      </div>

      <hr />
      <br />

      <div>
        <h2>Signup to create an account</h2>
        <form onSubmit={handleSignUp}>
          <label htmlFor="SignupEmail">
            Email
            <input
              type="email"
              id="SignupEmail"
              placeholder="Enter email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              required
            />
          </label>

          <label htmlFor="SignupPassword">
            Password
            <input
              type="password"
              id="SignupPassword"
              placeholder="Enter password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              required
            />
          </label>

          <button type="submit">Signup</button>
        </form>
        <p>{signupMessage && <span>{signupMessage}</span>}</p>
      </div>

      <hr />
      <br />

      {user ? (
        <div>
          <h2>Hi, {user.email}</h2>
          <p>Your ID is {user.id}</p>
        </div>
      ) : (
        loginMessage && <h2>{loginMessage}</h2>
      )}
    </main>
  );
}

export default App;
