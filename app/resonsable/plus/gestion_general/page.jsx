"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TopBar from "./../../TopBar";
import Sidebar from "./../../Sidebar";
import { 
  FaCalendarAlt, 
  FaBook, 
  FaLayerGroup, 
  FaUsers 
} from "react-icons/fa";
import "./general.css";

export default function GeneralPage() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((v) => !v);
  const router = useRouter();

  const cards = [
    {
      title: "Année universitaire",
      icon: FaCalendarAlt,
      route: "/resonsable/plus/gestion_general/annee-universitaire",
    },
    {
      title: "Semestres",
      icon: FaBook,
      route: "/resonsable/plus/gestion_general/semestres",
    },
    {
      title: "Niveaux / parcours",
      icon: FaLayerGroup,
      route: "/resonsable/plus/gestion_general/niveaux",
    },
    {
      title: "Groupes étudiants",
      icon: FaUsers,
      route: "/resonsable/plus/gestion_general/etudiants",
    },
  ];

  return (
    <div className="layout">
      <Sidebar open={open} toggleOpen={toggleOpen} />
      <div className="main">
        <TopBar />
        <div className="page-content">
          <div className="general-grid">
            {cards.map((c) => (
              <button
                key={c.title}
                className="general-card"
                onClick={() => router.push(c.route)}
              >
                <c.icon className="general-icon" />
                <span className="general-title">{c.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

