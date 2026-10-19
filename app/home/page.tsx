
"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  function handleLogout() {
    router.push("/");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#eef2ff",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "32px",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "400px",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#312e81",
            fontSize: "32px",
            margin: "0 0 16px",
          }}
        >
          Welcome!
        </h1>

        <p
          style={{
            color: "#475569",
            fontSize: "15px",
            margin: "0 0 12px",
          }}
        >
          You have successfully logged in.
        </p>

        <button
          onClick={handleLogout}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "12px",
            backgroundColor: "#4f46e5",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </section>
    </main>
  );
}
