"use client";
import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaCalendarDay } from "react-icons/fa";
import "./periode.css";

export default function PeriodsTable() {
  const [periods, setPeriods] = useState([
    { id: 1, debutJour: "10", debutMois: "10", finJour: "20", finMois: "10", selected: false, editing: false },
    { id: 2, debutJour: "20", debutMois: "10", finJour: "30", finMois: "10", selected: false, editing: false },
  ]);

  const addPeriod = () => {
    const newId = periods.length ? periods[periods.length - 1].id + 1 : 1;
    setPeriods([
      ...periods,
      { id: newId, debutJour: "", debutMois: "", finJour: "", finMois: "", selected: false, editing: true },
    ]);
  };

  const deleteSelected = () => {
    if (periods.some(p => p.selected)) {
      setPeriods(periods.filter((p) => !p.selected));
    } else {
      alert("Veuillez sélectionner au moins une période.");
    }
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

    setPeriods(periods.map((per) => 
      per.id === p.id ? { ...per, editing: !per.editing } : per
    ));
  };

  const updateField = (id, field, value) => {
    setPeriods(periods.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
  };

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
      <div className="periods-inner">
        <h2 className="periods-title">
          <FaCalendarDay /> Gestion des périodes
        </h2>

        <div className="periods-actions">
          <button className="periods-btn" onClick={addPeriod}>
            <FaPlus /> Ajouter
          </button>
          <button className="periods-btn periods-btn-delete" onClick={deleteSelected}>
            <FaTrash /> Supprimer sélectionné
          </button>
        </div>

        <div className="periods-table">
          <div className="periods-row periods-row-head">
            <div className="cell cell-num">N°</div>
            <div className="cell">Début (JJ/MM)</div>
            <div className="cell">Fin (JJ/MM)</div>
            <div className="cell">Action</div>
            <div className="cell">Sélection</div>
          </div>

          {periods.map((p, index) => (
            <div 
              key={p.id} 
              className={`periods-row ${index % 2 === 1 ? "periods-row-alt" : ""} ${p.selected ? "selected" : ""} ${hasError(p) ? "error-row" : ""}`}
            >
              <div className="cell cell-num value-cell">{index + 1}</div>
              
              <div className="cell value-cell">
                <div className="date-input">
                  <input
                    type="number"
                    value={p.debutJour}
                    placeholder="JJ"
                    disabled={!p.editing}
                    onChange={(e) => updateField(p.id, "debutJour", e.target.value)}
                    min="1"
                    max="31"
                  />
                  /
                  <select
                    value={p.debutMois}
                    disabled={!p.editing}
                    onChange={(e) => updateField(p.id, "debutMois", e.target.value)}
                  >
                    <option value="">MM</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i+1} value={i+1}>{i+1}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="cell value-cell">
                <div className="date-input">
                  <input
                    type="number"
                    value={p.finJour}
                    placeholder="JJ"
                    disabled={!p.editing}
                    onChange={(e) => updateField(p.id, "finJour", e.target.value)}
                    min="1"
                    max="31"
                  />
                  /
                  <select
                    value={p.finMois}
                    disabled={!p.editing}
                    onChange={(e) => updateField(p.id, "finMois", e.target.value)}
                  >
                    <option value="">MM</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i+1} value={i+1}>{i+1}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="cell value-cell">
                <button
                  className="periods-row-btn periods-row-edit"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleEdit(p);
                  }}
                >
                  <FaEdit /> {p.editing ? "Valider" : "Modifier"}
                </button>
              </div>

              <div className="cell value-cell">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={p.selected}
                    onChange={() => toggleSelect(p.id)}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

