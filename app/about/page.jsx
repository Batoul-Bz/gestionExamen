"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./about.css";

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="about-bg">
      {/* HEADER */}
      <header className="header">
        <img className="logo" src="/icon/logo.png" alt="Logo" />
        <div className="header_links">
          <button onClick={() => router.push("/")}>Home</button>
          <button style={{ color: "#B1C9FE" }} onClick={() => router.push("/about")}>
            About
          </button>
          <button onClick={() => router.push("/Login")}>Login</button>

        </div>
      </header>

      {/* ABOUT SECTION */}
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
              <img src="/icon/results.png" className="icon" alt="Exam Scheduling" />{" "}
              <strong>Exam Scheduling:</strong> Set dates, times, and duration for each
              exam easily.
            </p>
            <p>
              <img src="/icon/secure.png" className="icon" alt="Secure Login" />{" "}
              <strong>Secure Login:</strong> Strong authentication to protect data.
            </p>
          </div>

          <div className="about-image">
            <img src="/icon/about.png" alt="About Image" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p className="footer-title">We are committed to providing assistance</p>
        <div className="footer-contact">
          <span>
            <img
              src="/icon/phone.png"
              alt="Phone"
              style={{ width: 20, height: 20, marginRight: 8 }}
            />
            043 xx xx xx
          </span>
          <span>
            <img
              src="/icon/mail.png"
              alt="Email"
              style={{ width: 20, height: 20, marginRight: 8 }}
            />
            aboubaker-belkaid@univ.tlemcen.dz
          </span>
        </div>

        <div className="footer-logos">
          <img src="/icon/logo.png" alt="Logo" />
          <img src="/icon/copy.png" alt="Copyright" />
        </div>

        <p className="copy">ExOrderIt © 2025</p>
      </footer>
    </div>
  );
}
