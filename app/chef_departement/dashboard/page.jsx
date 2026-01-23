"use client";

import { useState } from "react";
import TopBar from "../TopBar";
import Sidebar from "../Sidebar";
import "./dashboard.css";

export default function ChefDepartementDashboard() {
  const [open, setOpen] = useState(false);

  const stats = [
    { label: "Examens du département", value: 18, icon: "/icon/examen.png" },
    { label: "Enseignants concernés", value: 24, icon: "/icon/teacher.png" },
    { label: "Étudiants du département", value: 620, icon: "/icon/etudiants.png" }
  ];

  const barData = [
    { day: "Sa", occuper: 6, dispo: 4 },
    { day: "Di", occuper: 9, dispo: 2 },
    { day: "Lu", occuper: 4, dispo: 6 },
    { day: "Ma", occuper: 7, dispo: 3 },
    { day: "Me", occuper: 8, dispo: 2 }
  ];

  const historique = [
    { id: 1, titre: "L3 Informatique", desc: "Examen IA - terminé" },
    { id: 2, titre: "L2 Informatique", desc: "Examen Bases de données - en cours" },
    { id: 3, titre: "L1 Informatique", desc: "Examen Algorithmique - prévu" }
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
                  <img src={s.icon} className="stat-icon" />
                </div>
              ))}
            </section>

            <section className="dash-section">
              <div className="section-title">État des examens du département</div>
              <div className="pie-row">
                <div className="fake-pie" />
                <div className="pie-legend">
                  <div><span className="dot dot-blue" /> En cours</div>
                  <div><span className="dot dot-purple" /> Prévu</div>
                  <div><span className="dot dot-grey" /> Terminé</div>
                </div>
              </div>
            </section>

            <section className="dash-section">
              <div className="section-title">Occupation des salles (département)</div>

              <div className="bar-wrapper">
                <div className="bar-legend">
                  <span className="dot dot-dark" /> Salles occupées
                  <span className="dot dot-light" /> Salles disponibles
                </div>

                <div className="bar-chart">
                  {barData.map((d) => (
                    <div key={d.day} className="bar-column">
                      <div className="bar-group">
                        <div className="bar bar-dark" style={{ height: `${d.occuper * 6}px` }}>
                          {d.occuper}
                        </div>
                        <div className="bar bar-light" style={{ height: `${d.dispo * 6}px` }}>
                          {d.dispo}
                        </div>
                      </div>
                      <div className="bar-day">{d.day}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="dash-section">
              <div className="section-title">Suivi des examens</div>

              <div className="history-list">
                {historique.map((h) => (
                  <div key={h.id} className="history-row">
                    <div>
                      <div className="history-title">{h.titre}</div>
                      <div className="history-desc">{h.desc}</div>
                    </div>
                    <button className="history-btn">Détails</button>
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
