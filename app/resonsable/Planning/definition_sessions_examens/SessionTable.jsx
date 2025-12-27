"use client";

import React, { useState } from "react";
import "./Session.css";

export default function SessionTable() {
  const [rows, setRows] = useState([
    { id: 1, period: "10/10 à 20/10", year: "2021-2022", session: "Contrôle continu", level: "L1" },
    { id: 2, period: "20/10 à 30/10", year: "2021-2022", session: "Contrôle continu", level: "L2" },
    { id: 3, period: "05/12 à 05/12", year: "2021-2022", session: "", level: "" },
    { id: 4, period: "02/01 à 10/01", year: "2021-2022", session: "Remplacement", level: "L3" },
  ]);

  const addRow = () => {
    const newId = rows.length ? rows[rows.length - 1].id + 1 : 1;
    setRows([
      ...rows,
      { id: newId, period: "", year: "2021-2022", session: "", level: "" },
    ]);
  };

  const updateField = (id, field, value) => {
    setRows(rows.map(r => (r.id === id ? { ...r, [field]: value } : r)));
  };

  const deleteRow = (id) => {
    setRows(rows.filter(r => r.id !== id));
  };

  const [editingId, setEditingId] = useState(null);

  const toggleEdit = (id) => {
    setEditingId(editingId === id ? null : id);
  };

  return (
    <div className="exam-wrapper">
      <div className="exam-card">
        <div className="exam-header">
          <h2>Définition sessions d’examens</h2>
        </div>

        <div className="exam-actions">
          <button className="exam-btn btn-add" onClick={addRow}>
            Ajouter +
          </button>
          
        </div>

        <div className="exam-table">
          <div className="exam-row exam-header-row">
            <div className="cell">Périod</div>
            <div className="cell">Année universitaire</div>
            <div className="cell">Sessions</div>
            <div className="cell">Niveau</div>
            <div className="cell cell-actions">Action</div>
          </div>

          {rows.map((r) => {
            const isEditing = editingId === r.id;
            return (
              <div key={r.id} className="exam-row">
                <div className="cell">
                  <input
                    type="text"
                    value={r.period}
                    disabled={!isEditing}
                    onChange={(e) => updateField(r.id, "period", e.target.value)}
                  />
                </div>
                <div className="cell">
                  <input
                    type="text"
                    value={r.year}
                    disabled={!isEditing}
                    onChange={(e) => updateField(r.id, "year", e.target.value)}
                  />
                </div>
                <div className="cell">
                  <input
                    type="text"
                    value={r.session}
                    disabled={!isEditing}
                    onChange={(e) => updateField(r.id, "session", e.target.value)}
                  />
                </div>
                <div className="cell">
                  <input
                    type="text"
                    value={r.level}
                    disabled={!isEditing}
                    onChange={(e) => updateField(r.id, "level", e.target.value)}
                  />
                </div>
                <div className="cell cell-actions">
                  <button
                    className="row-btn row-edit"
                    onClick={() => toggleEdit(r.id)}
                  >
                    {isEditing ? "Valider" : "Modifier"}
                  </button>
                  <button
                    className="row-btn row-delete"
                    onClick={() => deleteRow(r.id)}
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
