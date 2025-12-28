"use client";

import { useState } from "react";
import TopBar from "../../../TopBar";
import Sidebar from "../../../Sidebar";
import { FaPlus, FaEdit, FaTrash, FaUsers } from "react-icons/fa";
import "./groupes.css";

const initialGroupes = [
  { niveau: "L1", parcours: "Tronc commun", groupe: "G1" },
  { niveau: "L1", parcours: "Tronc commun", groupe: "G2" },
  { niveau: "L2", parcours: "Tronc commun", groupe: "G2" },
  { niveau: "L2", parcours: "Informatique", groupe: "A" },
  { niveau: "L2", parcours: "Informatique", groupe: "B" }
];

export default function Page() {
  const [groupes, setGroupes] = useState(initialGroupes);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleAjouter = () => {
    const niveau = prompt("Entrez le niveau (ex: L1):");
    if (!niveau) return;
    const parcours = prompt("Entrez le parcours:");
    if (!parcours) return;
    const groupe = prompt("Entrez le nom du groupe (ex: G1):");
    if (!groupe) return;

    setGroupes(prev => [...prev, { niveau, parcours, groupe }]);
  };

  const handleModifier = () => {
    if (selectedIndex === null) {
      alert("Veuillez sélectionner une ligne à modifier.");
      return;
    }
    const current = groupes[selectedIndex];

    const niveau = prompt("Modifier niveau:", current.niveau) || current.niveau;
    const parcours = prompt("Modifier parcours:", current.parcours) || current.parcours;
    const groupe = prompt("Modifier groupe:", current.groupe) || current.groupe;

    const updated = [...groupes];
    updated[selectedIndex] = { niveau, parcours, groupe };
    setGroupes(updated);
  };

  const handleSupprimer = () => {
    if (selectedIndex === null) {
      alert("Veuillez sélectionner une ligne à supprimer.");
      return;
    }
    if (!confirm("Supprimer ce groupe ?")) return;
    setGroupes(prev => prev.filter((_, i) => i !== selectedIndex));
    setSelectedIndex(null);
  };

  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <TopBar />
        <div className="page-content">
          <h2 className="page-title">
            <FaUsers /> Groupes étudiants
          </h2>

          <div className="actions">
            <button className="btn" onClick={handleAjouter}>
              <FaPlus /> Ajouter
            </button>
            <button className="btn" onClick={handleModifier}>
              <FaEdit /> Modifier
            </button>
            <button className="btn" onClick={handleSupprimer}>
              <FaTrash /> Supprimer
            </button>
          </div>

          <div className="table-container">
            <div className="header-row">
              <div className="cell header">Niveau</div>
              <div className="cell header">Parcours</div>
              <div className="cell header">Groupe</div>
            </div>

            {groupes.map((g, index) => (
              <div
                key={`${g.niveau}-${g.parcours}-${g.groupe}-${index}`}
                className={`data-row ${selectedIndex === index ? "selected" : ""}`}
                onClick={() => setSelectedIndex(index)}
              >
                <div className="cell">{g.niveau}</div>
                <div className="cell">{g.parcours}</div>
                <div className="cell">{g.groupe}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

