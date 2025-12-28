"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./about.css";
import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="page">
      <header className="header">
        <div className="logo-text">ExOrderIt</div>
        <div className="header_links">
          <button onClick={() => router.push("/")}>Home</button>
          <button 
            style={{ color: "#B1C9FE", fontWeight: 600 }} 
            onClick={() => router.push("/about")}
          >
            About
          </button>
          <button onClick={() => router.push("/Login")}>Login</button>
        </div>
      </header>

      <section className="about">
        <div className="about-container">
          <div className="card">
            <h1>About ExOrderIt</h1>
            <p>
              ExOrderIt is a digital platform designed to help teachers manage,
              organize, and conduct exams easily and efficiently. Our goal is to
              simplify the exam process by offering a modern and intuitive interface
              for both educators and students.
            </p>

            <h2>Who Is It For?</h2>
            <p>
              <img src="/icon/teacher.png" className="icon" alt="Teachers" />{" "}
              <strong>Teachers:</strong> Create exams, manage questions, correct
              submissions, and view results.
            </p>
            <p>
              <img src="/icon/student.png" className="icon" alt="Students" />{" "}
              <strong>Students:</strong> Take exams online and access their grades.
            </p>
            <p>
              <img src="/icon/institution.png" className="icon" alt="Institutions" />{" "}
              <strong>Institutions:</strong> Monitor exam activities and maintain
              data securely.
            </p>

            <h2>Our Features</h2>
            <p>
              <img src="/icon/class.png" className="icon" alt="Class & Student" />{" "}
              <strong>Class & Student:</strong> Manage classes and student lists easily.
            </p>
            <p>
              <img src="/icon/results.png" className="icon" alt="Results" />{" "}
              <strong>Results:</strong> Generate and share exam results instantly.
            </p>
            <p>
              <img src="/icon/account.png" className="icon" alt="Teacher Accounts" />{" "}
              <strong>Teacher Accounts:</strong> Secure accounts for teachers to manage
              their work.
            </p>
            <p>
              <img src="/icon/attendance.png" className="icon" alt="Attendance" />{" "}
              <strong>Attendance:</strong> Track student attendance and exam supervision.
            </p>
            <p>
              <img src="/icon/schedule.png" className="icon" alt="Exam Scheduling" />{" "}
              <strong>Exam Scheduling:</strong> Set dates, times, and duration for each
              exam easily.
            </p>
            <p>
              <img src="/icon/secure.png" className="icon" alt="Secure Login" />{" "}
              <strong>Secure Login:</strong> Strong authentication to protect data.
            </p>
          </div>

          <div className="about-image">
            <img src="/icon/about.png" alt="About ExOrderIt Platform" />
          </div>
        </div>
      </section>

<footer className="footer">
  <div className="footer-content">
    <h3 className="footer-title">We are committed to providing assistance</h3>

    <div className="footer-contact">
      <div className="contact-item">
        <FaPhone />
        <span>043 xx xx xx</span>
      </div>

      <div className="contact-item">
        <FaEnvelope />
        <a href="mailto:aboubaker-belkaid@univ.tlemcen.dz">
          aboubaker-belkaid@univ.tlemcen.dz
        </a>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    ExOrderIt © 2025
  </div>
</footer>


    </div>
  );
}
