"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TopBar from "./../TopBar";
import Sidebar from "./../Sidebar";
import { 
  FaDoorOpen, 
  FaCalendarAlt, 
  FaClipboardList, 
  FaFileAlt 
} from "react-icons/fa";
import "./Planning.css";

export default function Page() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  const buttons = [
    { title: "Gestion des salles", icon: FaDoorOpen, route: "/resonsable/Planning/gestion_salles" },
    { title: "Definition des périodes", icon: FaCalendarAlt, route: "/resonsable/Planning/definition_periode" },
    { title: "Définition sessions d'examens", icon: FaClipboardList, route: "/resonsable/Planning/definition_sessions_examens" },
    { title: "Gestion des examens", icon: FaFileAlt, route: "/resonsable/Planning/gestion_examen" },
  ];

  return (
    <div className="layout">
      <Sidebar open={open} toggleOpen={toggleOpen} />
      <div className="main">
        <TopBar />
        <div className="page-content">
          <div className="cards-grid">
            {buttons.map((btn) => (
              <div
                key={btn.title}
                className="card"
                onClick={() => router.push(btn.route)}
              >
                <btn.icon className="card-icon" />
                <div className="card-title">{btn.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

