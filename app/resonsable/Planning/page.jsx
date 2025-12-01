"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./../styles.css";
import TopBar from "./../TopBar";
import Sidebar from "./../Sidebar";
import "./Planning.css";

export default function Page() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  const buttons = [
    { title: "Gestion des salles", image: "/icon/salle.png", route: "/resonsable/Planning/gestion_salles" },
    { title: "Definition des périodes", image: "/icon/calendrier.png", route: "/resonsable/Planning/definition_periode" },
    { title: "Définition sessions d'examens", image: "/icon/rapport.png", route: "/resonsable/Planning/definition_sessions_examens" },
    { title: "Gestion des examens", image: "/icon/examen.png", route: "/resonsable/Planning/gestion_examen" },
  ];

  return (
    <div className="page">
      <TopBar />

      <div className="layout">
        <Sidebar open={open} toggleOpen={toggleOpen} />

        <main className={`content ${open ? "content-open" : ""}`}>
          <div className="cards-grid">
            {buttons.map((btn) => (
              <div
                key={btn.title}
                className="card"
                onClick={() => router.push(btn.route)}
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={btn.image}
                  width={80}
                  height={80}
                  alt={btn.title}
                  className="card-img"
                />
                <div className="card-title">{btn.title}</div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
