"use client";

import { useState } from "react";
import "./Planning.css";
import Sidebar from "./Sidebar";
import Topbar from "./TopBar";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const fakePlannings = [
  { id: 1, group: "L1-G1", level: "Licence 1", teacher: "Mme Algorithme", day: "Samedi", time: "08:00", module: "Algorithme 1", room: "A1" },
  { id: 2, group: "L1-G2", level: "Licence 1", teacher: "Mme Algorithme", day: "Samedi", time: "10:00", module: "Mathématiques", room: "A2" },
  { id: 3, group: "L2-G1", level: "Licence 2", teacher: "Mme Algorithme", day: "Dimanche", time: "08:30", module: "Bases de Données", room: "B1" },
  { id: 4, group: "L3-G1", level: "Licence 3", teacher: "Mme Algorithme", day: "Lundi", time: "08:00", module: "Sécurité Informatique", room: "C1" }
];

export default function TeacherPlanningPage() {
  const [teacher] = useState("Mme Algorithme");

  const teacherPlannings = fakePlannings.filter(
    (p) => p.teacher === teacher
  );

  const handlePrint = () => window.print();

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text(`Emploi du temps de ${teacher}`, 14, 20);

    autoTable(doc, {
      startY: 30,
      head: [["Niveau", "Groupe", "Module", "Jour", "Heure", "Salle"]],
      body: teacherPlannings.map((p) => [
        p.level,
        p.group,
        p.module,
        p.day,
        p.time,
        p.room
      ])
    });

    doc.save(`Planning_${teacher}.pdf`);
  };

  return (
    <div className="layout">
      <Topbar />
      <Sidebar />

      <main className="main">
        <div className="teacher-planning-page">
          <h2>Emploi du temps de {teacher}</h2>

          <div className="buttons-row">
            <button className="btn-print" onClick={handlePrint}>
              🖨️ Imprimer
            </button>
            <button className="btn-pdf" onClick={handleDownloadPDF}>
              ⬇️ Télécharger PDF
            </button>
          </div>

          {teacherPlannings.length === 0 ? (
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
                  {teacherPlannings.map((p) => (
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
