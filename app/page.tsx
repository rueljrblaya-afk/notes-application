
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    if (!email.trim().endsWith("@gmail.com")) {
      setError("Email must end with @gmail.com.");
      return;
    }

    if (!password) {
      setError("Password is required.");
      return;
    }

    if (password.length <= 6) {
      setError("Password must be more than 6 characters.");
      return;
    }

    router.push("/home");
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px",
    marginTop: "8px",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    boxSizing: "border-box",
    fontSize: "16px",
  };

  const buttonStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px",
    marginTop: "20px",
    background: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#eef2ff",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <section
        style={{
          background: "white",
          padding: "32px",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "400px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#312e81" }}>
          Login
        </h1>

        <p style={{ textAlign: "center", color: "#64748b" }}>
          Welcome! Please log in to continue.
        </p>

        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="Enter your Gmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <label
            htmlFor="password"
            style={{ display: "block", marginTop: "18px" }}
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>
            Login
          </button>

          {error && (
            <p
              role="alert"
              style={{ color: "#dc2626", marginTop: "15px" }}
            >
              {error}
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
