"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./Home.css";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="home-bg">
     <header className="header">
        <img className="logo" src="/icon/logo.png" alt="Logo" />
        <div className="header_links">
          <button style={{ color: "#B1C9FE" }} onClick={() => router.push("/")}>Home</button>
          <button onClick={() => router.push("/about")}>
            About
          </button>
          <button onClick={() => router.push("/Login")}>Login</button>

        </div>
      </header>

      <section className="hero">
        <img src="/icon/Home.png" alt="Home Image" className="hero-img" />
        <button className="cta" onClick={() => router.push("/about")}>
          Learn More
        </button>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature-card">
          <h3>✔ Smart Scheduling</h3>
          <p>Automatic generation of clear and conflict‑free exam schedules.</p>
        </div>
        <div className="feature-card">
          <h3>✔ Easy Coordination</h3>
          <p>Better communication between administration, teachers, and students.</p>
        </div>
        <div className="feature-card">
          <h3>✔ Time Saving</h3>
          <p>Focus on studying—we handle the organization.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logos">
          <img src="/icon/logo.png" alt="Logo" />
          <img src="/icon/copy.png" alt="Copyright" />
        </div>
        <p>ExOrderIt © 2025</p>
      </footer>
    </div>
  );
}
