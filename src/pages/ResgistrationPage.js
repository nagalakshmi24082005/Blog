import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "../css/RegistrationPage.css";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [redirect, setRedirect] = useState(false);

  async function register(ev) {
    ev.preventDefault();
    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }
    try {
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        setSuccessMessage("Registration successful! Redirecting to login...");
        setError(null);
        setTimeout(() => setRedirect(true), 2000); // Redirect after 2 seconds
      } else {
        setError("Registration failed. Try again.");
        setSuccessMessage(null);
      }
    } catch (err) {
      console.error("Error during registration:", err);
      setError("Registration failed. Please try again.");
    }
  }

  if (redirect) {
    return <Navigate to="/login" />;   
  }

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={register}>
        <h1 className="register-title">Register</h1>
        {error && <p className="register-error">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <div className="form-group">
          <label className="form-label">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            className="form-input"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="form-input"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </div>
        <button type="submit" className="form-button">
          Register
        </button>
      </form>
      <p className="switch-page-text">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}
 