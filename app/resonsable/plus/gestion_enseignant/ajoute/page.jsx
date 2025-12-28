"use client";

import React, { useState } from "react";
import Sidebar from "../../../Sidebar";
import TopBar from "../../../TopBar";
import { useRouter } from "next/navigation";
import "./ajoute.css";

export default function AjouteEnseignant() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    grade: "",    
  
  });
 const router = useRouter(); 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données envoyées :", formData);
    alert("Enseignant ajouté avec succès !");
  };

  return (
    <div className="page">
      <TopBar />
      <Sidebar open={sidebarOpen} toggleOpen={() => setSidebarOpen(!sidebarOpen)} />
  <div className={`content ${sidebarOpen ? "sidebar-open" : ""}`}>
    <div className="ens-header-bar">
      <button
        className="btn-retourne"
        type="button"
        onClick={() => router.push("/resonsable/plus/gestion_enseignant")}
      >
        ← Retour
      </button>

      <h2 className="ens-title">
        Gestion des enseignants

        <img
          src="/icon/enseignant.png"
          alt="enseignants"
          className="ens-title-icon"
        />
      </h2>

      <div className="ens-actions-right"></div>
    </div>

    <div className="card">
      <h2 className="title">Ajouter un enseignant</h2>

      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>Matricule :</label>
            <input
              type="text"
              name="matricule"
              value={formData.matricule}
              onChange={handleChange}
              placeholder="Ex : ENS1234"
              required
            />
          </div>

          <div className="form-group">
            <label>Nom :</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Nom"
              required
            />
          </div>

          <div className="form-group">
            <label>Prénom :</label>
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              placeholder="Prénom"
              required
            />
          </div>

          <div className="form-group">
            <label>Email :</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="exemple@domaine.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Date de naissance :</label>
            <input
              type="date"
              name="dateNaissance"
              value={formData.dateNaissance}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Spécialité :</label>
            <input
              type="text"
              name="specialite"
              value={formData.specialite}
              onChange={handleChange}
              placeholder="Informatique, Math, ..."
              required
            />
          </div>

          <div className="form-group">
            <label>Département :</label>
            <input
              type="text"
              name="departement"
              value={formData.departement}
              onChange={handleChange}
              placeholder="Ex : Informatique"
              required
            />
          </div>

          <div className="form-group">
            <label>Grade :</label>
            <select
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              required
            >
              <option value="">-- Sélectionner --</option>
              <option value="MA">ClasseA</option>
              <option value="MC">Classe B</option>
              <option value="PR">....(Pour rechercher)</option>
            </select>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-submit">
            Ajouter l’enseignant
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

  
  );
}

