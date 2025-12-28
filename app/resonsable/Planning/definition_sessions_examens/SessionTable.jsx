"use client";
import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaCalendarAlt } from "react-icons/fa";
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
    <div className="session-wrapper">
      <div className="session-inner">
        <h2 className="session-title">
          <FaCalendarAlt /> Définition sessions d examens
        </h2>

        <div className="session-actions">
          <button className="session-btn" onClick={addRow}>
            <FaPlus /> Ajouter
          </button>
        </div>

        <div className="session-table">
          <div className="session-row session-row-head">
            <div className="cell cell-num">N°</div>
            <div className="cell">Période</div>
            <div className="cell">Année universitaire</div>
            <div className="cell">Session</div>
            <div className="cell">Niveau</div>
          </div>

          {rows.map((r, index) => {
            const isEditing = editingId === r.id;
            return (
              <div key={r.id} className={`session-row ${index % 2 === 1 ? "session-row-alt" : ""}`}>
                <div className="cell cell-num value-cell">{index + 1}</div>
                <div className="cell value-cell">
                  <input
                    type="text"
                    value={r.period}
                    disabled={!isEditing}
                    onChange={(e) => updateField(r.id, "period", e.target.value)}
                  />
                </div>
                <div className="cell value-cell">
                  <input
                    type="text"
                    value={r.year}
                    disabled={!isEditing}
                    onChange={(e) => updateField(r.id, "year", e.target.value)}
                  />
                </div>
                <div className="cell value-cell">
                  <input
                    type="text"
                    value={r.session}
                    disabled={!isEditing}
                    onChange={(e) => updateField(r.id, "session", e.target.value)}
                  />
                </div>
                <div className="cell value-cell">
                  <input
                    type="text"
                    value={r.level}
                    disabled={!isEditing}
                    onChange={(e) => updateField(r.id, "level", e.target.value)}
                  />
                </div>
                <div className="cell value-cell">
                  <button
                    className="session-row-btn session-row-edit"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleEdit(r.id);
                    }}
                  >
                    <FaEdit /> {isEditing ? "Valider" : "Modifier"}
                  </button>
                  <button
                    className="session-row-btn session-row-delete"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteRow(r.id);
                    }}
                  >
                    <FaTrash />
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

