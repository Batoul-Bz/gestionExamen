"use client";

import { useState, useEffect } from "react";
import "./Planning.css";

import Sidebar from "./../Sidebar";
import Topbar from "./../TopBar";

const fakePlannings = [
  { id: 1, group: "L1-G1", level: "Licence 1", teacher: "Mme Algorithme", day: "Samedi", date: "11/01/2026", time: "08:00", module: "Algorithme 1", room: "A1", status: "pending" }, 
  { id: 2, group: "L1-G2", level: "Licence 1", teacher: "Mr Math", day: "Samedi", date: "11/01/2026", time: "10:00", module: "Mathématiques", room: "A2", status: "accepted" },
  { id: 3, group: "L2-G1", level: "Licence 2", teacher: "Mme BD", day: "Dimanche", date: "12/01/2026", time: "08:30", module: "Bases de Données", room: "B1", status: "pending" },
  { id: 4, group: "L2-G2", level: "Licence 2", teacher: "Mr Réseaux", day: "Dimanche", date: "12/01/2026", time: "10:30", module: "Réseaux", room: "B2", status: "accepted" },
  { id: 5, group: "L3-G1", level: "Licence 3", teacher: "Mme Sécurité", day: "Lundi", date: "13/01/2026", time: "08:00", module: "Sécurité Informatique", room: "C1", status: "pending" },
  { id: 6, group: "L3-G2", level: "Licence 3", teacher: "Mr Génie Logiciel", day: "Lundi", date: "13/01/2026", time: "10:00", module: "Génie Logiciel", room: "C2", status: "accepted" },
  { id: 7, group: "M1-G1", level: "Master 1", teacher: "Dr IA", day: "Mardi", date: "14/01/2026", time: "09:00", module: "Intelligence Artificielle", room: "D1", status: "pending" },
  { id: 8, group: "M1-G2", level: "Master 1", teacher: "Dr Data", day: "Mardi", date: "14/01/2026", time: "11:00", module: "Data Mining", room: "D2", status: "accepted" },
  { id: 9, group: "L2-G3", level: "Licence 2", teacher: "Mme Web", day: "Mercredi", date: "15/01/2026", time: "08:30", module: "Développement Web", room: "B3", status: "pending" },
  { id: 10, group: "L1-G3", level: "Licence 1", teacher: "Mr Programmation", day: "Mercredi", date: "15/01/2026", time: "10:30", module: "Programmation C", room: "A3", status: "accepted" },
  { id: 11, group: "L3-G3", level: "Licence 3", teacher: "Mme Mobile", day: "Jeudi", date: "16/01/2026", time: "09:00", module: "Développement Mobile", room: "C3", status: "pending" },
  { id: 12, group: "M1-G3", level: "Master 1", teacher: "Dr ux design", day: "Jeudi", date: "16/01/2026", time: "11:00", module: "Cloud Computing", room: "D3", status: "accepted" }
];

export default function ChefDepartementPage() {
  const [teacherFilter, setTeacherFilter] = useState("");
  const [levelFilter, setLevelFilter] = useState("");
  const [groupFilter, setGroupFilter] = useState("");
  const [dayFilter, setDayFilter] = useState("");
  const [plannings, setPlannings] = useState(fakePlannings);
  const [selectedPlanning, setSelectedPlanning] = useState(null);
  const [cancelComment, setCancelComment] = useState("");
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showPublierModal, setShowPublierModal] = useState(false);
  const [publishMessage, setPublishMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setGroupFilter("");
    setDayFilter("");
  }, [teacherFilter, levelFilter]);

  useEffect(() => {
    setDayFilter("");
  }, [groupFilter]);

  const filteredPlannings = plannings.filter(
    (p) =>
      (!teacherFilter || p.teacher === teacherFilter) &&
      (!levelFilter || p.level === levelFilter) &&
      (!groupFilter || p.group === groupFilter) &&
      (!dayFilter || p.day === dayFilter)
  );

  const handleAccept = (id) => {
    setPlannings((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: "accepted" } : p))
    );
  };

  const handleCancelPlanning = () => {
    if (!selectedPlanning) return;

    setPlannings((prev) =>
      prev.map((p) =>
        p.id === selectedPlanning.id
          ? { ...p, status: "rejected", comment: cancelComment }
          : p
      )
    );

    setShowCancelModal(false);
    setSelectedPlanning(null);
    setCancelComment("");
  };

  const handlePublier = () => {
    setPublishMessage("");
    setShowPublierModal(true);
  };

  const confirmPublier = () => {
    try {
      const acceptedPlannings = plannings.filter(p => p.status === "accepted");

      if (acceptedPlannings.length === 0) {
        setPublishMessage("il n y a pas des données a publier⚠️");
      } else {
        setPublishMessage("le planning est publier avec succes✅");
      }

      setShowToast(true);
      setShowPublierModal(false);
      setTimeout(() => setShowToast(false), 3000);
    } catch (error) {
      setPublishMessage(" le planning n'ont pas pu etre publier❌");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  const teachers = [...new Set(plannings.filter(p => !levelFilter || p.level === levelFilter).map(p => p.teacher))];
  const levels = [...new Set(plannings.map(p => p.level))];
  const groups = [...new Set(plannings.filter(p => (!levelFilter || p.level === levelFilter) && (!teacherFilter || p.teacher === teacherFilter)).map(p => p.group))];
  const days = [...new Set(plannings.filter(p => (!levelFilter || p.level === levelFilter) && (!teacherFilter || p.teacher === teacherFilter) && (!groupFilter || p.group === groupFilter)).map(p => p.day))];

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Topbar />

        <div className="planning-page">
          {showToast && (
            <div className="toast">
              {publishMessage}
            </div>
          )}

          <div className="filters-row">
            <select className="filter-select" value={teacherFilter} onChange={(e) => setTeacherFilter(e.target.value)}>
              <option value="">Enseignant</option>
              {teachers.map(t => <option key={t} value={t}>{t}</option>)}
            </select>

            <select className="filter-select" value={levelFilter} onChange={(e) => setLevelFilter(e.target.value)}>
              <option value="">Niveau</option>
              {levels.map(l => <option key={l} value={l}>{l}</option>)}
            </select>

            <select className="filter-select" value={groupFilter} onChange={(e) => setGroupFilter(e.target.value)}>
              <option value="">Groupe</option>
              {groups.map(g => <option key={g} value={g}>{g}</option>)}
            </select>

            <select className="filter-select" value={dayFilter} onChange={(e) => setDayFilter(e.target.value)}>
              <option value="">Jour</option>
              {days.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>

          <button className="btn-publier" onClick={handlePublier}>Publier</button>

          {filteredPlannings.length === 0 ? (
            <p className="no-data">Aucun planning trouvé</p>
          ) : (
            <table className="planning-table">
              <thead>
                <tr>
                  <th>Niveau</th>
                  <th>Groupe</th>
                  <th>Enseignant</th>
                  <th>Module</th>
                  <th>Jour</th>
                  <th>Heure</th>
                  <th>Salle</th>
                  <th>Statut</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredPlannings.map((p) => (
                  <tr key={p.id}>
                    <td>{p.level}</td>
                    <td>{p.group}</td>
                    <td>{p.teacher}</td>
                    <td>{p.module}</td>
                    <td>{p.day}</td>
                    <td>{p.time}</td>
                    <td>{p.room}</td>
                    <td>
                      <span className={`status-badge status-${p.status}`}>
                        {p.status}
                      </span>
                    </td>
                    <td>
                      {p.status === "pending" && (
                        <>
                          <button className="btn-accept" onClick={() => handleAccept(p.id)}>Accepter</button>
                          <button className="btn-cancel" onClick={() => { setSelectedPlanning(p); setShowCancelModal(true); }}>Refuser</button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {showCancelModal && (
            <div className="modal-overlay">
              <div className="modal">
                <h3>Refuser le planning</h3>
                <textarea className="modal-textarea" value={cancelComment} onChange={(e) => setCancelComment(e.target.value)} />
                <div className="modal-actions">
                  <button className="btn-secondary" onClick={() => setShowCancelModal(false)}>Annuler</button>
                  <button className="btn-primary" onClick={handleCancelPlanning}>Envoyer</button>
                </div>
              </div>
            </div>
          )}

          {showPublierModal && (
            <div className="modal-overlay">
              <div className="modal">
                <h3>voullez vous publier tous les planning acceptees a tous le monde</h3>
                <div className="modal-actions">
                  <button className="btn-secondary" onClick={() => setShowPublierModal(false)}>Annuler</button>
                  <button className="btn-primary" onClick={confirmPublier}>OUI</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
