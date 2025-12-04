"use client";

import { useState } from "react";
import TopBar from "./../../TopBar";
import Sidebar from "./../../Sidebar";
import { useRouter } from "next/navigation";
import "./etudiant.css";

export default function StudentPage() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((v) => !v);
  const router = useRouter(); 
  const [rows, setRows] = useState([
    {
      id: 1,
      matricule: "121234345656",
      nom: "Labraoui",
      prenom: "Asma",
      dateNaiss: "07-11-2003",
      departement: "Informatique",
      editing: false,
    },
  ]);



  const updateField = (id, field, value) => {
    setRows(rows.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
  };

  const toggleEdit = (id) => {
    setRows(rows.map((r) => (r.id === id ? { ...r, editing: !r.editing } : r)));
  };

  const deleteRow = (id) => {
    setRows(rows.filter((r) => r.id !== id));
  };

  const handleImport = () => {
    alert("Importer un fichier (à implémenter plus tard)");
  };

  return (
    <div className="page">
      <TopBar />

      <div className="layout">
        <Sidebar open={open} toggleOpen={toggleOpen} />

        <main className={`content ${open ? "content-open" : ""}`}>
          <div className="ens-wrapper">
            <div className="ens-header-bar">
              <button
                className="btn-retourne"
                onClick={() => router.push("/resonsable/plus")}
              >
                Retourner ««
              </button>

              <h2 className="ens-title">
                {" "}
                Gestion des étudiants
                <img
                  src="/icon/enseignant.png"
                  alt="etudiants"
                  className="ens-title-icon"
                />
              </h2>

              <div className="ens-actions-right">
                <button className="ens-btn btn-importer" onClick={handleImport}>
                  Importer ⬇
                </button>
                <button
                  className="ens-btn btn-ajouter"
                  onClick={() => router.push("/resonsable/plus/gestion-etudiant/ajouter")}
                >
                  Ajouter ＋
                </button>
              </div>
            </div>

            <div className="ens-list">
              {rows.map((r, index) => (
                <div
                  key={r.id}
                  className={`ens-row ${index % 2 === 1 ? "ens-row-alt" : ""}`}
                >
                  <div className="ens-cell wide">
                    <input
                      type="text"
                      value={r.matricule}
                      disabled={!r.editing}
                      onChange={(e) =>
                        updateField(r.id, "matricule", e.target.value)
                      }
                    />
                  </div>
                  <div className="ens-cell">
                    <input
                      type="text"
                      value={r.nom}
                      disabled={!r.editing}
                      onChange={(e) => updateField(r.id, "nom", e.target.value)}
                    />
                  </div>
                  <div className="ens-cell">
                    <input
                      type="text"
                      value={r.prenom}
                      disabled={!r.editing}
                      onChange={(e) =>
                        updateField(r.id, "prenom", e.target.value)
                      }
                    />
                  </div>
                  <div className="ens-cell">
                    <input
                      type="text"
                      value={r.dateNaiss}
                      disabled={!r.editing}
                      onChange={(e) =>
                        updateField(r.id, "dateNaiss", e.target.value)
                      }
                    />
                  </div>
                  <div className="ens-cell">
                    <input
                      type="text"
                      value={r.departement}
                      disabled={!r.editing}
                      onChange={(e) =>
                        updateField(r.id, "departement", e.target.value)
                      }
                    />
                  </div>
                  <div className="ens-cell">
                    <input
                      type="text"
                      value={r.grade}
                      disabled={!r.editing}
                      onChange={(e) =>
                        updateField(r.id, "grade", e.target.value)
                      }
                    />
                  </div>

                  <div className="ens-cell ens-actions">
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
