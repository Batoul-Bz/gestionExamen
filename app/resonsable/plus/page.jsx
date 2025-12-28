"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TopBar from "../TopBar";
import Sidebar from "../Sidebar";
import { 
  FaChalkboardTeacher, 
  FaUsers, 
  FaCogs, 
  FaBookOpen, 
  FaDoorOpen 
} from "react-icons/fa";
import "./plus.css";

export default function PlusPage() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((v) => !v);
  const router = useRouter();

  const cards = [
    { title: "Gestion des enseignant", icon: FaChalkboardTeacher, route: "/resonsable/plus/gestion_enseignant" },
    { title: "Gestion des étudiant", icon: FaUsers, route: "/resonsable/plus/gestion-etudiant" },
    { title: "Gestion générale", icon: FaCogs, route: "/resonsable/plus/gestion_general" },
    { title: "Gestion des modules", icon: FaBookOpen, route: "/resonsable/plus/gestion_module" },
    { title: "Gestion des salles", icon: FaDoorOpen, route: "/resonsable/plus/gestion_salle" },
  ];

  return (
    <div className="layout">
      <Sidebar open={open} toggleOpen={toggleOpen} />
      <div className="main">
        <TopBar />
        <div className="page-content">
          <div className="cards-grid">
            {cards.map((card, index) => (
              <button
                key={card.title}
                className={`dash-card ${index === 1 ? "center-card" : ""}`}
                onClick={() => router.push(card.route)}
              >
                <card.icon className="dash-icon" />
                <span className="dash-title">{card.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

