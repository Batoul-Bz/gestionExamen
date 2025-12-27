// SemestresPage.jsx
"use client";

import { useState } from "react";
import TopBar from "../../../TopBar";
import Sidebar from "../../../Sidebar";
import { FaCalendarAlt, FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import "./semestres.css";

export default function SemestresPage() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((v) => !v);

  const [rows, setRows] = useState([
    { id: 1, numero: 1, semestre: "S1", annee: "2021-2022", editing: false },
    { id: 2, numero: 2, semestre: "S2", annee: "2021-2022", editing: false },
    { id: 3, numero: 3, semestre: "S3", annee: "2022-2023", editing: false },
    { id: 4, numero: 4, semestre: "S4", annee: "2023-2024", editing: false },
    { id: 5, numero: 5, semestre: "|...", annee: "2024-2025", editing: false },
  ]);

  const addRow = () => {
    const newId = rows.length ? rows[rows.length - 1].id + 1 : 1;
    setRows([...rows, { id: newId, numero: newId, semestre: "", annee: "", editing: true }]);
  };

  const toggleEdit = (id) => {
    setRows(rows.map((r) => (r.id === id ? { ...r, editing: !r.editing } : r)));
  };

  const updateField = (id, field, value) => {
    setRows(rows.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
  };

  const deleteRow = (id) => {
    setRows(rows.filter((r) => r.id !== id));
  };

  return (
    <div className="page">
      <TopBar />

      <div className="layout">
        <div className={`sidebar ${open ? "open" : ""}`}>
          <Sidebar toggleOpen={toggleOpen} open={open} />
        </div>

        <main className="content">
          <div className="sem-wrapper">
            <div className="sem-inner">
             
              <div className="sem-header">
                <h2 className="sem-title">
                  Semestres <FaCalendarAlt className="sem-icon-img" />
                </h2>
              </div>

              <div className="sem-actions">
                <button className="sem-btn btn-add" onClick={addRow}>
                  Ajouter <FaPlus className="circle" />
                </button>
                <button
                  className="sem-btn btn-edit"
                  onClick={() => rows[0] && toggleEdit(rows[0].id)}
                >
                  Modifier <FaEdit className="circle" />
                </button>
                <button
                  className="sem-btn btn-delete"
                  onClick={() =>
                    rows.length && deleteRow(rows[rows.length - 1].id)
                  }
                >
                  Supprimer <FaTrash className="circle" />
                </button>
              </div>

              <div className="sem-table">
                <div className="sem-row sem-row-head">
                  <div className="cell cell-num">Numéro</div>
                  <div className="cell cell-sem">Semestre</div>
                  <div className="cell cell-annee">Année universitaire</div>
                </div>

                {rows.map((r, i) => (
                  <div
                    key={r.id}
                    className={`sem-row ${i % 2 === 1 ? "sem-row-alt" : ""}`}
                  >
                    <div className="cell cell-num value-cell">{r.numero}</div>
                    <div className="cell cell-sem value-cell">
                      <input
                        type="text"
                        value={r.semestre}
                        disabled={!r.editing}
                        onChange={(e) =>
                          updateField(r.id, "semestre", e.target.value)
                        }
                      />
                    </div>
                    <div className="cell cell-annee value-cell">
                      <input
                        type="text"
                        value={r.annee}
                        disabled={!r.editing}
                        onChange={(e) =>
                          updateField(r.id, "annee", e.target.value)
                        }
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
