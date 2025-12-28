"use client";

import { useState } from "react";
import TopBar from "../TopBar";
import Sidebar from "../Sidebar";
import "./dashboard.css";

export default function DashboardPage() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((v) => !v);

  const stats = [
    { label: "Nombre examens", value: 32, icon: "/icon/examen.png" },
    { label: "Nombre étudiants", value: 1235, icon: "/icon/etudiants.png" },
    { label: "Nombre salles", value: 50, icon: "/icon/salle.png" },
  ];

  const barData = [
    { day: "sa", occuper: 9, dispo: 4 },
    { day: "di", occuper: 16, dispo: 2 },
    { day: "lu", occuper: 5, dispo: 11 },
    { day: "ma", occuper: 11, dispo: 7 },
    { day: "me", occuper: 12, dispo: 3 },
    { day: "je", occuper: 16, dispo: 2 },
  ];

  const historique = [
    { id: 1, titre: "Groupe 01", desc: "Examen informatique - matin" },
    { id: 2, titre: "Groupe 02", desc: "Examen base de données" },
    { id: 3, titre: "Groupe 03", desc: "Examen réseaux" },
  ];

  return (
    <div className="page">
      <TopBar />

      <div className="layout">
        <Sidebar open={open} toggleOpen={toggleOpen} />

        <main className={`content ${open ? "content-open" : ""}`}>
          <div style={{width : "100%"}} className="dash-main">

           
            <section className="dash-stats">
              {stats.map((s) => (
                <div key={s.label} className="stat-card">
                  <div className="stat-number">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                  {s.icon && <img src={s.icon} className="stat-icon" />}
                </div>
              ))}
            </section>

           
            <section className="dash-section">
              <div className="section-title">L’état des examens</div>
              <div className="pie-row">
                <div className="fake-pie" />
                <div className="pie-legend">
                  <div><span className="dot dot-blue" /> En cours</div>
                  <div><span className="dot dot-purple" /> Prévu</div>
                  <div><span className="dot dot-grey" /> Annulé</div>
                </div>
              </div>
            </section>

         
            <section className="dash-section">
              <div className="section-title">Nombre salles</div>

              <div className="bar-wrapper">
                <div className="bar-legend">
                  <span className="dot dot-dark" /> Les salles occuper
                  <span className="dot dot-light" /> Les salles disponibles
                </div>

                <div className="bar-chart">
                  {barData.map((d) => (
                    <div key={d.day} className="bar-column">
                      <div className="bar-group">
                        <div
                          className="bar bar-dark"
                          style={{ height: `${d.occuper * 6}px` }}
                        >
                          <span className="bar-value">{d.occuper}</span>
                        </div>
                        <div
                          className="bar bar-light"
                          style={{ height: `${d.dispo * 6}px` }}
                        >
                          <span className="bar-value">{d.dispo}</span>
                        </div>
                      </div>
                      <div className="bar-day">{d.day}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {}
            <section className="dash-section">
              <div className="section-title">Historique</div>

              <div className="history-list">
                {historique.map((h) => (
                  <div key={h.id} className="history-row">
                    <div className="history-main">
                      <div className="history-title">{h.titre}</div>
                      <div className="history-desc">{h.desc}</div>
                    </div>
                    <button className="history-btn">...</button>
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

