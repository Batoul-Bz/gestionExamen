"use client";

import { useState } from "react";
import TopBar from "../TopBar";
import Sidebar from "../Sidebar";
import "./dashboard.css";

export default function StudentDashboardPage() {
  const [open, setOpen] = useState(false);

 
  const stats = [
    { label: "Examens à venir", value: 4 , icon: "/icon/examen.png" },
    { label: "Examens passés", value: 5, icon: "/icon/examen-passed.png" },
    { label: "Notes reçues", value: 4, icon: "/icon/grades.png" }, 
  ];

  
  const examsByDay = [
    { day: "Lu", exam: "Arduino",  status: "à venir" },
    { day: "Ma", exam: "IA", status: "à venir" },
    { day: "Me", exam: "TechWeb", status: "terminé" },
  ];

  
  const historique = [
    { id: 1, titre: "Arduino", desc: "Examen passé - 10 Janvier" },
    { id: 2, titre: "TechWeb", desc: "Examen passé - 15 Janvier" },
    { id: 3, titre: "IA", desc: "Examen prévu - 25 Janvier" },
  ];

  
  const getBarHeight = (status) => {
    if (status === "terminé") return "90px";
    if (status === "à venir") return "60px"; 
    return "40px";
  };

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
                  <img src={s.icon} className="stat-icon" alt={s.label} />
                </div>
              ))}
            </section>

            
            <section className="dash-section">
              <div className="section-title">État de mes examens</div>
              <div className="pie-row">
                <div className="fake-pie" />
                <div className="pie-legend">
                  <div><span className="dot dot-blue" /> À venir</div>
                  <div><span className="dot dot-purple" /> Terminé</div>
                  <div><span className="dot dot-grey" /> Annulé</div>
                </div>
              </div>
            </section>

       
            <section className="dash-section">
              <div className="section-title">Mes examens cette semaine</div>
              <div className="bar-chart">
                {examsByDay.map((d) => (
                  <div key={d.day} className="bar-column">
                    <div className="bar-group">
                      <div 
                        className={`bar ${d.status === "terminé" ? "bar-dark" : "bar-light"}`} 
                        style={{ height: getBarHeight(d.status) }}
                      >
                        {d.exam} <br /> 
                      </div>
                    </div>
                    <div className="bar-day">{d.day}</div>
                  </div>
                ))}
              </div>
            </section>

            
            <section className="dash-section">
              <div className="section-title">Historique de mes examens</div>
              <div className="history-list">
                {historique.map((h) => (
                  <div key={h.id} className="history-row">
                    <div>
                      <div className="history-title">{h.titre}</div>
                      <div className="history-desc">{h.desc}</div>
                    </div>
                    <button className="history-btn">Voir détails</button>
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
