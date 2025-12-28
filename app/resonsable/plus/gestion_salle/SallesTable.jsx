"use client";
import { useState } from "react";
import { FaPlus, FaDoorOpen, FaEdit, FaTrash } from "react-icons/fa";

export default function SallesTable() {
  const [salles, setSalles] = useState([
    {
      id: 1,
      numero: 1,
      nom: "Salle N101",
      capacite: "50",
      localisation: "North - Étage 1",
      editing: false,
    },
    {
      id: 2,
      numero: 2,
      nom: "Salle S001",
      capacite: "30",
      localisation: "Sude - RDC",
      editing: false,
    },
    {
      id: 3,
      numero: 3,
      nom: "Salle N202",
      capacite: "40",
      localisation: "North - Étage 2",
      editing: false,
    },
  ]);

  const [selectedIndex, setSelectedIndex] = useState(null);

  const addSalle = () => {
    const newId = salles.length ? salles[salles.length - 1].id + 1 : 1;

    const newSalle = {
      id: newId,
      numero: newId,
      nom: "",
      capacite: "",
      localisation: "",
      editing: true,
    };

    setSalles([...salles, newSalle]);
    setSelectedIndex(salles.length);
  };

  const toggleEdit = () => {
    if (selectedIndex === null) {
      alert("Veuillez sélectionner une ligne.");
      return;
    }

    setSalles((prevSalles) =>
      prevSalles.map((salle, index) =>
        index === selectedIndex
          ? { ...salle, editing: !salle.editing }
          : { ...salle, editing: false }
      )
    );
  };

  const updateField = (id, field, value) => {
    setSalles((prevSalles) =>
      prevSalles.map((salle) =>
        salle.id === id ? { ...salle, [field]: value } : salle
      )
    );
  };

  const deleteSalle = () => {
    if (selectedIndex === null) {
      alert("Veuillez sélectionner une ligne à supprimer.");
      return;
    }

    if (!confirm("Supprimer cette salle ?")) return;

    setSalles((prevSalles) =>
      prevSalles.filter((_, index) => index !== selectedIndex)
    );
    setSelectedIndex(null);
  };

  return (
    <div className="salle-wrapper">
      <div className="salle-inner">
        <h2 className="salle-title">
          <FaDoorOpen /> Gestion des salles
        </h2>

        <div className="salle-actions">
          <button className="salle-btn" onClick={addSalle}>
            <FaPlus /> Ajouter
          </button>
          <button className="salle-btn" onClick={toggleEdit}>
            <FaEdit /> Modifier
          </button>
          <button
            className="salle-btn salle-btn-delete"
            onClick={deleteSalle}
          >
            <FaTrash /> Supprimer
          </button>
        </div>

        <div className="salle-table">
          <div className="salle-row salle-row-head">
            <div className="cell cell-num">N°</div>
            <div className="cell">Nom</div>
            <div className="cell">Capacité</div>
            <div className="cell">Localisation</div>
          </div>

          {salles.map((salle, index) => (
            <div
              key={salle.id}
              className={`salle-row ${
                index % 2 === 1 ? "salle-row-alt" : ""
              } ${selectedIndex === index ? "selected" : ""}`}
              onClick={() => setSelectedIndex(index)}
            >
              <div className="cell cell-num value-cell">
                {salle.numero}
              </div>

              <div className="cell value-cell">
                <input
                  type="text"
                  value={salle.nom}
                  disabled={!salle.editing}
                  onChange={(e) =>
                    updateField(salle.id, "nom", e.target.value)
                  }
                />
              </div>

              <div className="cell value-cell">
                <input
                  type="number"
                  value={salle.capacite}
                  disabled={!salle.editing}
                  onChange={(e) =>
                    updateField(salle.id, "capacite", e.target.value)
                  }
                />
              </div>

              <div className="cell value-cell">
                <input
                  type="text"
                  placeholder="Bloc / Étage / Zone"
                  value={salle.localisation}
                  disabled={!salle.editing}
                  onChange={(e) =>
                    updateField(
                      salle.id,
                      "localisation",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

