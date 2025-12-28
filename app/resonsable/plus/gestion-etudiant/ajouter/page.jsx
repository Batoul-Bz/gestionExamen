"use client";

import React, { useState } from "react";
import Sidebar from "../../../Sidebar";
import TopBar from "../../../TopBar";
import "./ajoute.css";

export default function AjouteEtudiant() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [formData, setFormData] = useState({
    matricule: "",
    nom: "",
    prenom: "",
    dateNaiss: "",
    specialite: "",
    groupe: "",
    departement: "",
    niveau: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données étudiant :", formData);
    alert("Étudiant ajouté avec succès !");
  };

  return (
    <div className="page">
      <TopBar />
      <Sidebar open={sidebarOpen} toggleOpen={() => setSidebarOpen(!sidebarOpen)} />

      <div className={`content ${sidebarOpen ? "sidebar-open" : ""}`}>
        <h2 className="title">Ajouter un étudiant</h2>

        <form className="form-container" onSubmit={handleSubmit}>
          
          <label>Matricule :</label>
          <input
            type="text"
            name="matricule"
            onChange={handleChange}
            required
          />

          <label>Nom :</label>
          <input
            type="text"
            name="nom"
            onChange={handleChange}
            required
          />

          <label>Prénom :</label>
          <input
            type="text"
            name="prenom"
            onChange={handleChange}
            required
          />

          <label>Date de naissance :</label>
          <input
            type="date"
            name="dateNaiss"
            onChange={handleChange}
            required
          />

          <label>Spécialité :</label>
          <input
            type="text"
            name="specialite"
            onChange={handleChange}
            required
          />

          <label>Groupe :</label>
          <input
            type="text"
            name="groupe"
            onChange={handleChange}
            required
          />

          <label>Département / Laboratoire :</label>
          <input
            type="text"
            name="departement"
            onChange={handleChange}
            required
          />

          <label>Niveau :</label>
          <select name="niveau" onChange={handleChange} required>
            <option value="">-- Sélectionner --</option>
            <option value="L1">L1</option>
            <option value="L2">L2</option>
            <option value="L3">L3</option>
            <option value="M1">M1</option>
            <option value="M2">M2</option>
          </select>

          <button type="submit" className="btn-submit">
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
}

