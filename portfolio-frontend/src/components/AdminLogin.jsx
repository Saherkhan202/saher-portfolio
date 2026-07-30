import { useState } from "react";
import "./AdminLogin.css";

function AdminLogin({ onLogin }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (password === "Saher@123") {
      setError("");
      onLogin();
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <section className="admin-login">
      <div className="login-card">

        <div className="login-icon">
          🔐
        </div>

        <span className="login-label">
          ADMIN AREA
        </span>

        <h1>
          Welcome Back
        </h1>

        <p>
          Enter your password to access the admin dashboard.
        </p>

        <form onSubmit={handleLogin}>

          <div className="login-input-group">
            <label>
              Admin Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="login-error">
              {error}
            </p>
          )}

          <button type="submit">
            Login to Dashboard
            <span>→</span>
          </button>

        </form>

      </div>
    </section>
  );
}

export default AdminLogin;