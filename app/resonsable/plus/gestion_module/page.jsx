"use client";

import { useState } from "react";
import TopBar from "./../../TopBar";
import Sidebar from "./../../Sidebar";
import { useRouter } from "next/navigation";
import "./module.css";

export default function ModulesPage() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((v) => !v);
  const router = useRouter();

  const [rows, setRows] = useState([

    { id: 1, code: "INF220", nom: "BD1",         semestre: "Semestre1", enseignant: "Mr.Ali",   editing: false },
  ]);

  const updateField = (id, field, value) =>
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)));

  const toggleEdit = (id) =>
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, editing: !r.editing } : r)));

  const deleteRow = (id) =>
    setRows((prev) => prev.filter((r) => r.id !== id));

  const handleImport = () => {
    alert("Importer un fichier (à implémenter plus tard)");
  };

  const addRow = () => {
    const newRow = {
      id: Date.now(),
      code: "",
      nom: "",
      semestre: "",
      enseignant: "",
      editing: true,
    };
    setRows((prev) => [...prev, newRow]);
  };

  return (
    <div className="page">
      <TopBar />

      <div className="layout">
        <Sidebar open={open} toggleOpen={toggleOpen} />

        <main className={`content ${open ? "content-open" : ""}`}>
          <div className="mod-wrapper">
            <div className="mod-header-bar">
              <button
                className="btn-retourne"
                onClick={() => router.push("/resonsable/plus")}
              >
                Retourne ««
              </button>

              <h2 className="mod-title">
                Gestion des modules
                <img
                  src="/icon/modules.png"
                  alt="modules"
                  className="mod-title-icon"
                />
              </h2>

              <div className="mod-actions-right">
                <button className="mod-btn btn-importer" onClick={handleImport}>
                  Importer ⬇
                </button>
                <button className="mod-btn btn-ajouter" onClick={addRow}>
                  Ajouter ＋
                </button>
              </div>
            </div>

            <div className="mod-table">
        
              

          
              {rows.map((r, index) => (
                <div
                  key={r.id}
                  className={`mod-row ${index % 2 === 1 ? "mod-row-alt" : ""}`}
                >
                  <div className="mod-cell wide">
                    <input
                      type="text"
                      value={r.nom}
                      disabled={!r.editing}
                      onChange={(e) => updateField(r.id, "nom", e.target.value)}
                    />
                  </div>
                  <div className="mod-cell">
                    <input
                      type="text"
                      value={r.code}
                      disabled={!r.editing}
                      onChange={(e) => updateField(r.id, "code", e.target.value)}
                    />
                  </div>
                  <div className="mod-cell">
                    <input
                      type="text"
                      value={r.semestre}
                      disabled={!r.editing}
                      onChange={(e) =>
                        updateField(r.id, "semestre", e.target.value)
                      }
                    />
                  </div>
                  <div className="mod-cell">
                    <input
                      type="text"
                      value={r.enseignant}
                      disabled={!r.editing}
                      onChange={(e) =>
                        updateField(r.id, "enseignant", e.target.value)
                      }
                    />
                  </div>

                  <div className="mod-cell actions-cell">
                    <button
                      className="row-icon-btn"
                      onClick={() => toggleEdit(r.id)}
                    >
                      <img src="/icon/editer.png" alt="edit" />
                    </button>
                    <button
                      className="row-icon-btn"
                      onClick={() => deleteRow(r.id)}
                    >
                      <img src="/icon/supprimer.png" alt="delete" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
