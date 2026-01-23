"use client";

import { useState } from "react";
import TopBar from "../TopBar";
import Sidebar from "../Sidebar";
import "./dashboard.css";

export default function TeacherDashboardPage() {
  const [open, setOpen] = useState(false);

  const stats = [
    { label: "Examens de mes matières", value: 2 },
    { label: "Séances de surveillance", value: 7 },
    { label: "Copies à corriger", value: 48 }
  ];

  const duties = [
    {
      subject: "Intelligence Artificielle",
      role: "Examen",
      group: "L3",
      room: "Salle N202",
      date: "Lundi 10:00"
    },
    {
      subject: "TechWeb",
      role: "Surveillance",
      group: "L2",
      room: "Salle S104",
      date: "Mercredi 08:30"
    },
    {
      subject: "Bases de données",
      role: "Surveillance",
      group: "L1",
      room: "Salle N001",
      date: "Jeudi 13:00"
    }
  ];

  return (
    <div className="page">
      <TopBar />
      <div className="layout">
        <Sidebar open={open} toggleOpen={() => setOpen(!open)} />
        <main className={`content ${open ? "content-open" : ""}`}>
          <div className="dash-main">

            <section className="dash-stats">
              {stats.map((s) => (
                <div key={s.label} className="stat-card">
                  <div className="stat-number">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </section>

            <section className="dash-section">
              <div className="section-title">Mes convocations aux examens</div>
              <div className="exam-list">
                {duties.map((d, i) => (
                  <div key={i} className="exam-card">
                    <div className="exam-left">
                      <div className="exam-subject">{d.subject}</div>
                      <div className="exam-meta">
                        {d.group} • {d.room} • {d.date}
                      </div>
                    </div>
                    <div
                      className={`exam-badge ${
                        d.role === "Examen"
                          ? "badge-exam"
                          : "badge-surveillance"
                      }`}
                    >
                      {d.role}
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}
