"use client";

import { useState } from "react";
import TopBar from "../../../TopBar";
import Sidebar from "../../../Sidebar";
import "./annee-universitaire.css";

export default function AnneeUniversitairePage() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((v) => !v);

  const [rows, setRows] = useState([
    { id: 1, numero: 1, label: "2021-2022", editing: false },
    { id: 2, numero: 2, label: "2022-2023", editing: false },
    { id: 3, numero: 3, label: "2023-2024", editing: false },
    { id: 4, numero: 4, label: "2024-2025", editing: false },
  ]);

  const addRow = () => {
    const newId = rows.length ? rows[rows.length - 1].id + 1 : 1;
    setRows([
      ...rows,
      { id: newId, numero: newId, label: "", editing: true },
    ]);
  };

  const toggleEdit = (id) => {
    setRows(rows.map((r) => (r.id === id ? { ...r, editing: !r.editing } : r)));
  };

  const updateLabel = (id, value) => {
    setRows(rows.map((r) => (r.id === id ? { ...r, label: value } : r)));
  };

  const deleteRow = (id) => {
    setRows(rows.filter((r) => r.id !== id));
  };

  return (
    <div className="page">
      <TopBar />

      <div className="layout">
        <Sidebar open={open} toggleOpen={toggleOpen} />

        <main className={`content ${open ? "content-open" : ""}`}>
          <div className="annee-wrapper">
            <div className="annee-inner">
              {/* العنوان */}
              <div className="annee-header">
                <h2 className="annee-title">
                  Année universitaire
                  <img
                    src="/icon/calendrier.png"
                    alt="année universitaire"
                    className="annee-icon-img"
                  />
                </h2>
              </div>

              
              <div className="annee-actions">
                <button className="annee-btn btn-add" onClick={addRow}>
                  Ajouter <span className="circle">＋</span>
                </button>
                <button
                  className="annee-btn btn-edit"
                  onClick={() => rows[0] && toggleEdit(rows[0].id)}
                >
                  Modifier <span className="circle">✎</span>
                </button>
                <button
                  className="annee-btn btn-delete"
                  onClick={() =>
                    rows.length && deleteRow(rows[rows.length - 1].id)
                  }
                >
                  Supprimer <span className="circle">🗑</span>
                </button>
              </div>

             
              <div className="annee-table">
                <div className="annee-row annee-row-head">
                  <div className="cell cell-num">Numéro</div>
                  <div className="cell cell-label">Année universitaire</div>
                </div>

                {rows.map((r, i) => (
                  <div
                    key={r.id}
                    className={`annee-row ${
                      i % 2 === 1 ? "annee-row-alt" : ""
                    }`}
                  >
                    <div className="cell cell-num value-cell">{r.numero}</div>
                    <div className="cell cell-label value-cell">
                      <input
                        type="text"
                        value={r.label}
                        disabled={!r.editing}
                        onChange={(e) => updateLabel(r.id, e.target.value)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
