"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./Login.css";

export default function LoginPage() {
     const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
 
 const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      setEmailError("Email is required");
    } else if (!regex.test(value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && email) {
      alert("Login success (demo)");
    }
  };
  return (
    <div className="page">
      <header className="header">
        <img className="logo" src="/icon/logo.png" alt="Logo" />
        <div className="header_links">
          <button onClick={() => router.push("/")}>Home</button>
          <button onClick={() => router.push("/about")}>About</button>
          <button style={{ color: "#B1C9FE", fontWeight: 600 }} onClick={() => router.push("/login")}>
            LogIn
          </button>
        </div>
      </header>

      <main className="login">
        <div className="logi">
        <div className="login-card">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
              />
              {emailError && <span className="error">{emailError}</span>}
            </div>

            <div className="field">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>

            <button type="submit" className="submit-btn" onClick={() => router.push("/resonsable/dashboard")}>
              ✓
            </button>
          </form>
        </div>
        <div className="images">
          <img src="/icon/welcom.png" alt="Welcome Image" />
        </div>
        </div>
      </main>

      <footer className="footer">
        <img className="logo" src="/icon/logo.png" alt="Logo" />
        <div className="copy">
          <img className="logo" src="/icon/copy.png" alt="Copyright" />
        </div>
      </footer>
    </div>
  );
}
