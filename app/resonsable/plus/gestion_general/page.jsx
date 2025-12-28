"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TopBar from "./../../TopBar";
import Sidebar from "./../../Sidebar";
import "./general.css";

export default function GeneralPage() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((v) => !v);
  const router = useRouter();

  const cards = [
    {
      title: "Année universitaire",
      icon: "/icon/calendrier.png",
      route: "/resonsable/plus/gestion_general/annee-universitaire",
    },
    {
      title: "Semestres",
      icon: "/icon/examen.png",
      route: "/resonsable/plus/gestion_general/semestres",
    },
    {
      title: "Niveaux / parcours",
      icon: "/icon/modules.png",
      route: "/resonsable/plus/gestion_general/niveaux",
    },
    {
      title: "Groupes étudiants",
      icon: "/icon/gens.png",
      route: "/resonsable/gestion_general/etudiants",
    },
  ];

  return (
    <div className="page">
      <TopBar />

      <div className="layout">
        <Sidebar open={open} toggleOpen={toggleOpen} />

        <main className={`content ${open ? "content-open" : ""}`}>
          <div className="general-wrapper">
            <div className="general-inner">
              {cards.map((c) => (
                <button
                  key={c.title}
                  className="general-card"
                  onClick={() => router.push(c.route)}
                >
                  <img src={c.icon} className="general-icon" />
                  <span className="general-title">{c.title}</span>
                </button>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
