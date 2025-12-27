"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TopBar from "../TopBar";
import Sidebar from "../Sidebar";

import "./plus.css";

export default function PlusPage() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((v) => !v);
  const router = useRouter();

  const cards = [
{ title: "Gestion des enseignant", icon: "/icon/enseignant.png", route: "/resonsable/plus/gestion_enseignant" },

    { title: "Gestion des étudiant", icon: "/icon/etudiants.png", route: "/resonsable/plus/gestion-etudiant" },
    { title: "Gestion générale", icon: "/icon/generale.png", route: "/resonsable/plus/gestion_general" },
    { title: "Gestion des modules", icon: "/icon/modules.png", route: "/resonsable/plus/gestion_module" },
    { title: "Gestion des salles", icon: "/icon/salle.png", route: "/resonsable/plus/gestion_salle" },
  ];

  return (
    <div className="page">
      <TopBar />

      <div className="layout">
        <Sidebar open={open} toggleOpen={toggleOpen} />

        <main className={`content ${open ? "content-open" : ""}`}>
          <div className="plus-wrapper">
            <div className="cards-layout">
              <button
                className="dash-card"
                onClick={() => router.push(cards[0].route)}
              >
                <img src={cards[0].icon} className="dash-icon" />
                <span>{cards[0].title}</span>
              </button>

              <button
                className="dash-card center-card"
                onClick={() => router.push(cards[2].route)}
              >
                <img src={cards[2].icon} className="dash-icon" />
                <span>{cards[2].title}</span>
              </button>

              <button
                className="dash-card"
                onClick={() => router.push(cards[1].route)}
              >
                <img src={cards[1].icon} className="dash-icon" />
                <span>{cards[1].title}</span>
              </button>

              <button
                className="dash-card"
                onClick={() => router.push(cards[3].route)}
              >
                <img src={cards[3].icon} className="dash-icon" />
                <span>{cards[3].title}</span>
              </button>

              <button
                className="dash-card"
                onClick={() => router.push(cards[4].route)}
              >
                <img src={cards[4].icon} className="dash-icon" />
                <span>{cards[4].title}</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
