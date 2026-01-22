"use client";

import React, { useState } from "react";
import "./periode.css";

export default function PeriodsTable() {
  const [periods, setPeriods] = useState([
    { id: 1, debutJour: "", debutMois: "", finJour: "", finMois: "", selected: false, editing: false },
    { id: 2, debutJour: "", debutMois: "", finJour: "", finMois: "", selected: false, editing: false },
  ]);

  
  const addPeriod = () => {
    const newId = periods.length ? periods[periods.length - 1].id + 1 : 1;
    setPeriods([
      ...periods,
      { id: newId, debutJour: "", debutMois: "", finJour: "", finMois: "", selected: false, editing: true },
    ]);
  };

  
  const deleteSelected = () => {
    setPeriods(periods.filter((p) => !p.selected));
  };

  
  const toggleSelect = (id) => {
    setPeriods(periods.map((p) => (p.id === id ? { ...p, selected: !p.selected } : p)));
  };

 
  const toggleEdit = (p) => {
    if (p.editing) {
      const dj = parseInt(p.debutJour);
      const dm = parseInt(p.debutMois);
      const fj = parseInt(p.finJour);
      const fm = parseInt(p.finMois);

      if (
        isNaN(dj) || dj < 1 || dj > 31 ||
        isNaN(dm) || dm < 1 || dm > 12 ||
        isNaN(fj) || fj < 1 || fj > 31 ||
        isNaN(fm) || fm < 1 || fm > 12
      ) {
        alert("Jour doit être 1-31 et Mois 1-12");
        return;
      }
    }

    setPeriods(periods.map((per) => per.id === p.id ? { ...per, editing: !per.editing } : per));
  };

  // Update field
  const updateField = (id, field, value) => {
    setPeriods(periods.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
  };

  // Vérifier erreur pour highlight
  const hasError = (p) => {
    const dj = parseInt(p.debutJour);
    const dm = parseInt(p.debutMois);
    const fj = parseInt(p.finJour);
    const fm = parseInt(p.finMois);
    return (
      (dj && (dj < 1 || dj > 31)) ||
      (dm && (dm < 1 || dm > 12)) ||
      (fj && (fj < 1 || fj > 31)) ||
      (fm && (fm < 1 || fm > 12))
    );
  };

  return (
    <div className="periods-wrapper">
      <div className="periods-card">
        <div className="periods-header">
          <h2>Gestion des périodes</h2>
        </div>

        <div className="periods-actions">
          <button className="periods-btn btn-add" onClick={addPeriod}>Ajouter +</button>
          <button className="periods-btn btn-delete" onClick={deleteSelected}>Supprimer sélectionné</button>
        </div>

        <div className="periods-table">
          <div className="periods-row periods-row-header">
            <div className="cell">Début (JJ/MM)</div>
            <div className="cell">Fin (JJ/MM)</div>
            <div className="cell">Action</div>
            <div className="cell">Sélection</div>
          </div>

          {periods.map((p) => (
            <div key={p.id} className={`periods-row ${hasError(p) ? "error-row" : ""}`}>
              <div className="cell">
                <input
                  type="number"
                  value={p.debutJour}
                  placeholder="JJ"
                  disabled={!p.editing}
                  onChange={(e) => updateField(p.id, "debutJour", e.target.value)}
                  style={{ width: "45px", marginRight: "5px", borderColor: hasError(p) ? "red" : "" }}
                />
                /
                <select
                  value={p.debutMois}
                  disabled={!p.editing}
                  onChange={(e) => updateField(p.id, "debutMois", e.target.value)}
                  style={{ width: "50px", marginLeft: "5px", borderColor: hasError(p) ? "red" : "" }}
                >
                  <option value="">MM</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i+1} value={i+1}>{i+1}</option>
                  ))}
                </select>
              </div>

              <div className="cell">
                <input
                  type="number"
                  value={p.finJour}
                  placeholder="JJ"
                  disabled={!p.editing}
                  onChange={(e) => updateField(p.id, "finJour", e.target.value)}
                  style={{ width: "45px", marginRight: "5px", borderColor: hasError(p) ? "red" : "" }}
                />
                /
                <select
                  value={p.finMois}
                  disabled={!p.editing}
                  onChange={(e) => updateField(p.id, "finMois", e.target.value)}
                  style={{ width: "50px", marginLeft: "5px", borderColor: hasError(p) ? "red" : "" }}
                >
                  <option value="">MM</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i+1} value={i+1}>{i+1}</option>
                  ))}
                </select>
              </div>

              <div className="cell">
                <button
                  className="periods-btn btn-edit"
                  onClick={() => toggleEdit(p)}
                  style={{ padding: "5px 10px", fontSize: "14px" }}
                >
                  {p.editing ? "Valider" : "Modifier"}
                </button>
              </div>

              <div className="cell">
                <input
                  type="checkbox"
                  checked={p.selected}
                  onChange={() => toggleSelect(p.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
