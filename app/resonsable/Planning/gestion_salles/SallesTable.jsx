"use client";

import React, { useState } from "react";
import "./salle.css";

export default function SallesTable() {
  const [salles, setSalles] = useState([
    { id: 1, nom: "Salle N101", type: "Disponible", date: "2025-12-01", heure: "08:00" },
    { id: 2, nom: "Salle S001",  type: "Occupée", date: "2025-12-02", heure: "10:00" },
  ]);

  const [editingId, setEditingId] = useState(null);

  const addSalle = () => {
    const newId = salles.length ? salles[salles.length - 1].id + 1 : 1;
    setSalles([
      ...salles,
      { id: newId, nom: "", type: "", date: "", heure: "" },
    ]);
    setEditingId(newId);
  };

  const updateField = (id, field, value) => {
    setSalles(salles.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
  };

  const deleteRow = (id) => {
    setSalles(salles.filter((s) => s.id !== id));
    if (editingId === id) setEditingId(null);
  };

  const toggleEdit = (id) => {
    setEditingId(editingId === id ? null : id);
  };

  return (
    <div className="exam-wrapper">
      <div className="exam-card">
        <div className="exam-header">
          <h2>Gestion des salles</h2>
        </div>

        <div className="exam-actions">
          <button className="exam-btn btn-add" onClick={addSalle}>
            Ajouter +
          </button>
         
        </div>

        <div className="exam-table">
          <div className="exam-row exam-header-row">
            <div className="cell">Nom</div>
            <div className="cell">Capacité</div>
            <div className="cell">Disponibilité</div>
            <div className="cell">Date</div>
            <div className="cell">Heure</div>
            <div className="cell cell-actions">Action</div>
          </div>

          {salles.map((s) => {
            const isEditing = editingId === s.id;
            return (
              <div key={s.id} className="exam-row">
                <div className="cell">
                  <input
                    type="text"
                    value={s.nom}
                    disabled={!isEditing}
                    onChange={(e) => updateField(s.id, "nom", e.target.value)}
                  />
                </div>
                <div className="cell">
                  <input
                    type="number"
                    value={s.capacite}
                    disabled={!isEditing}
                    onChange={(e) => updateField(s.id, "capacite", e.target.value)}
                  />
                </div>
                <div className="cell">
                  <select
                    value={s.type}
                    disabled={!isEditing}
                    onChange={(e) => updateField(s.id, "type", e.target.value)}
                  >
                    <option value="">Choisir</option>
                    <option value="Disponible">Disponible</option>
                    <option value="Occupée">Occupée</option>
                  </select>
                </div>
                <div className="cell">
                  <input
                    type="date"
                    value={s.date}
                    disabled={!isEditing}
                    onChange={(e) => updateField(s.id, "date", e.target.value)}
                  />
                </div>
                <div className="cell">
                  <input
                    type="time"
                    value={s.heure}
                    disabled={!isEditing}
                    onChange={(e) => updateField(s.id, "heure", e.target.value)}
                  />
                </div>
                <div className="cell cell-actions">
                  <button
                    className="row-btn row-edit"
                    onClick={() => toggleEdit(s.id)}
                  >
                    {isEditing ? "Valider" : "Modifier"}
                  </button>
                  <button
                    className="row-btn row-delete"
                    onClick={() => deleteRow(s.id)}
                  >
                    X
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
