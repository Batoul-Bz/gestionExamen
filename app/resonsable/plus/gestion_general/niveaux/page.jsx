"use client";

import { useState } from "react";
import TopBar from "../../../TopBar";
import Sidebar from "../../../Sidebar";
import { FaPlus, FaEdit, FaTrash, FaLayerGroup, FaBook } from "react-icons/fa";
import "./niveaux.css";

export default function Page() {
  const niveaux = ["L1", "L2", "L3", "M1", "M2", "ING1", "ING2", "ING3", "ING4", "ING5"];
  
  const initialParcours = {
    L1: ["Tronc commun MI", "ST","SM","Math", "Info"],
    L2: ["Info", "MATH","Physique", "Chimie"],
    L3: ["Systeme information", "Spécialisation ING"],
    M1: ["Info (GL, AI, SIC, Réseau)", "Autres spécialisations"],
    M2: ["Info (GL, AI, SIC, Réseau)", "Autres spécialisations"],
    ING1: ["Spécialité ING1"],
    ING2: ["Spécialité ING2"],
    ING3: ["Spécialité ING3"],
    ING4: ["Spécالité ING4"],
    ING5: ["Spécialité ING5"]
  };

  const [selectedNiveau, setSelectedNiveau] = useState("L1");
  const [parcoursData, setParcoursData] = useState(initialParcours);

  const handleAction = (action) => {
    if (action === "Ajouter") {
      const nouveau = prompt(`Ajouter nouveau parcours pour ${selectedNiveau}:`);
      if (nouveau) {
        setParcoursData(prev => ({
          ...prev,
          [selectedNiveau]: [...prev[selectedNiveau], nouveau]
        }));
      }
    } else if (action === "Modifier") {
      const ancien = prompt(`Quel parcours modifier dans ${selectedNiveau}?`);
      if (!ancien) return;
      const nouveau = prompt(`Entrez le nouveau nom pour "${ancien}":`);
      if (nouveau) {
        setParcoursData(prev => ({
          ...prev,
          [selectedNiveau]: prev[selectedNiveau].map(p => p === ancien ? nouveau : p)
        }));
      }
    } else if (action === "Supprimer") {
      const toDelete = prompt(`Quel parcours supprimer dans ${selectedNiveau}?`);
      if (toDelete) {
        setParcoursData(prev => ({
          ...prev,
          [selectedNiveau]: prev[selectedNiveau].filter(p => p !== toDelete)
        }));
      }
    }
  };

  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <TopBar />
        <div className="page-content">
          <h2 className="page-title">
  <FaLayerGroup />
  Niveaux / Parcours
</h2>

          <div className="actions">
            <button className="btn" onClick={() => handleAction("Ajouter")}>
              <FaPlus />
              Ajouter
            </button>
            <button className="btn" onClick={() => handleAction("Modifier")}>
              <FaEdit />
              Modifier
            </button>
            <button className="btn" onClick={() => handleAction("Supprimer")}>
              <FaTrash />
              Supprimer
            </button>
          </div>
          <div className="grid">
            <div className="column">
              <div className="card header">
                <FaBook />
                Niveaux
              </div>
              {niveaux.map((niveau) => (
                <div
                  key={niveau}
                  className={`card ${selectedNiveau === niveau ? "selected" : ""}`}
                  onClick={() => setSelectedNiveau(niveau)}
                >
                  {niveau}
                </div>
              ))}
            </div>
            <div className="column">
              <div className="card header">
                <FaBook />
                Parcours de {selectedNiveau}
              </div>
              <div className="parcours-column">
                {parcoursData[selectedNiveau].map((p) => (
                  <div key={`${selectedNiveau}-${p}`} className="parcours-item">
                    <FaBook className="parcours-icon" />
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

