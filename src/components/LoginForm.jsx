import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": "e3ec16ad-8c53-4cec-83ad-c53201a584bd",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
    } catch (error) {
      setError("Incorrect credenstials..");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            required
          />
          <input
            type="password"
            placeholder="Enter Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
