"use client";

import { useRef, useState } from "react";
import TopBar from "../TopBar";
import Sidebar from "./../Sidebar";
import "./profile.css";

export default function ProfilePage() {
  const [photoUrl, setPhotoUrl] = useState(null);
  const fileInputRef = useRef(null);

  const handleChoosePhoto = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPhotoUrl(url);
  };

  return (
    <div className="page">
      <TopBar />
      <Sidebar />

      <div className="content">
        <div className="profile-wrapper">

          
          <section className="profile-card">
            <h2 className="card-title">Informations personal:</h2>

            <div className="personal-grid">

           
              <div className="photo-col">
                <div
                  className="photo-circle"
                  style={
                    photoUrl
                      ? {
                          backgroundImage: `url(${photoUrl})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : {}
                  }
                />
                <button className="photo-btn" type="button" onClick={handleChoosePhoto}>
                  Modifier la photo
                </button>

                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handlePhotoChange}
                />
              </div>

              
              <div className="personal-fields">
                <div className="field-row">
                  <div className="field">
                    <label>Nom :</label>
                    <input type="text" defaultValue="Merzoug" />
                  </div>
                  <div className="field">
                    <label>Date de naissance</label>
                    <input type="date" defaultValue="" />
                  </div>
                </div>

                <div className="field-row">
                  <div className="field">
                    <label>Prénom :</label>
                    <input type="text" defaultValue="Houcine" />
                  </div>
                  <div className="field">
                    <label>Ville :</label>
                    <input type="text" defaultValue="Tlemcen" />
                  </div>
                </div>

                <div className="field-row">
                  <div className="field full">
                    <label>Numéro de téléphone :</label>
                    <input type="text" defaultValue="+213 --- -- -- --" />
                  </div>
                </div>
              </div>
            </div>
          </section>

         
          <section className="profile-card">
            <h2 className="card-title">Informations sur l’emploi :</h2>

            <div className="job-grid">
              <div className="field-row">
                <div className="field">
                  <label>Email :</label>
                  <input type="email" defaultValue="Maatiallah@gmail.com" />
                </div>
                <div className="field">
                  <label>Function de poste :</label>
                  <input type="text" defaultValue="Chef departement d'informatique" />
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <label>Mod de passe :</label>
                  <input type="password" defaultValue="********" />
                </div>
                <div className="field">
                  <label>Lieu de travail</label>
                  <input type="text" defaultValue="Abobaker...." />
                </div>
              </div>

              <div className="field-row">
                <div className="field full">
                  <label>Expériences et compétences :</label>
                  <input type="text" defaultValue="doctorant ......." />
                </div>
              </div>

              <div className="field-row">
                <div className="field full">
                  <label>Formation et certifications </label>
                  <input type="text" defaultValue="Formation sur ......" />
                </div>
              </div>
            </div>

            <div className="profile-footer">
              <button className="footer-btn main">modification des information </button>
              <button className="footer-btn">Langue </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

