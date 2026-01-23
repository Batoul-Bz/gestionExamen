"use client";

import { useState } from "react";
import "./Planning.css";
import Sidebar from "./Sidebar";
import Topbar from "./TopBar";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const fakePlannings = [
  { id: 1, group: "M1-GL1", level: "Master 1", teacher: "Dr. Sécurité", day: "Lundi", time: "08:00", module: "Sécurité Informatique", room: "C101" },
  { id: 2, group: "M1-GL1", level: "Master 1", teacher: "Dr. Bases de Données", day: "Lundi", time: "10:00", module: "Bases de Données Avancées", room: "C102" },
  { id: 3, group: "M1-GL1", level: "Master 1", teacher: "Dr. DevWeb", day: "Mardi", time: "08:00", module: "Développement Web Avancé", room: "C103" },
  { id: 4, group: "M1-GL1", level: "Master 1", teacher: "Dr. IA", day: "Mardi", time: "10:00", module: "Intelligence Artificielle", room: "C104" },
  { id: 5, group: "M1-GL1", level: "Master 1", teacher: "Dr. Algo", day: "Mercredi", time: "08:00", module: "Algorithmes Avancés", room: "C105" },
  { id: 6, group: "M1-GL1", level: "Master 1", teacher: "Dr. Réseaux", day: "Mercredi", time: "10:00", module: "Réseaux Informatiques", room: "C106" },
  { id: 7, group: "M1-GL1", level: "Master 1", teacher: "Dr. Projet", day: "Jeudi", time: "08:00", module: "Gestion de Projet", room: "C107" },
  { id: 8, group: "M1-GL1", level: "Master 1", teacher: "Dr. DevMobile", day: "Jeudi", time: "10:00", module: "Développement Mobile", room: "C108" },
  { id: 9, group: "M1-GL1", level: "Master 1", teacher: "Dr. QA", day: "Vendredi", time: "08:00", module: "Qualité Logicielle", room: "C109" }
];

export default function StudentPlanningPage() {
  const [group] = useState("M1-GL1");

  const studentPlannings = fakePlannings.filter((p) => p.group === group);

  const handlePrint = () => window.print();

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text(`Emploi du temps de ${group}`, 14, 20);

    autoTable(doc, {
      startY: 30,
      head: [["Niveau", "Groupe", "Module", "Jour", "Heure", "Salle"]],
      body: studentPlannings.map((p) => [
        p.level,
        p.group,
        p.module,
        p.day,
        p.time,
        p.room
      ])
    });

    doc.save(`Planning_${group}.pdf`);
  };

  return (
    <div className="layout">
      <Topbar />
      <Sidebar />

      <main className="main">
        <div className="student-planning-page">
          <h2>Emploi du temps de {group}</h2>

          <div className="buttons-row">
            <button className="btn-print" onClick={handlePrint}>
              🖨️ Imprimer
            </button>
            <button className="btn-pdf" onClick={handleDownloadPDF}>
              ⬇️ Télécharger PDF
            </button>
          </div>

          {studentPlannings.length === 0 ? (
            <p className="no-data">Aucun planning trouvé</p>
          ) : (
            <div className="table-container">
              <table className="planning-table">
                <thead>
                  <tr>
                    <th>Niveau</th>
                    <th>Groupe</th>
                    <th>Module</th>
                    <th>Jour</th>
                    <th>Heure</th>
                    <th>Salle</th>
                  </tr>
                </thead>
                <tbody>
                  {studentPlannings.map((p) => (
                    <tr key={p.id}>
                      <td>{p.level}</td>
                      <td>{p.group}</td>
                      <td>{p.module}</td>
                      <td>{p.day}</td>
                      <td>{p.time}</td>
                      <td>{p.room}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
