"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaBell, FaUser } from "react-icons/fa";
import "./styles.css";

export default function TopBar() {
  const router = useRouter();
  const [showNotif, setShowNotif] = useState(false);

  const goToProfile = () => {
    router.push("/resonsable/profile");
  };

  const toggleNotif = () => {
    setShowNotif(!showNotif);
  };

  const fakeNotifications = [
    { id: 1, text: "Nouvelle tâche assignée", time: "2 min ago" },
    { id: 2, text: "Mise à jour du planning", time: "10 min ago" },
    { id: 3, text: "Message important reçu", time: "30 min ago" },
  ];

  return (
    <header className="top-bar">
      <div className="logo">
        <span className="logo-text">Exorderit</span>
      </div>

      <div className="user-box">
        <div className="notif-wrapper">
          <button className="notif-btn" onClick={toggleNotif}>
            <FaBell className="notif-icon" />
            {fakeNotifications.length > 0 && <span className="notif-badge"></span>}
          </button>
          {showNotif && (
            <div className="notif-dropdown">
              {fakeNotifications.map((notif) => (
                <div key={notif.id} className="notif-item">
                  <p className="notif-text">{notif.text}</p>
                  <span className="notif-time">{notif.time}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <button className="user-info" onClick={goToProfile}>
          <div className="user-avatar">
            <FaUser />
          </div>
          <div>
            <div className="user-text-main">User Name</div>
            <div className="user-text-sub">Administrateur</div>
          </div>
        </button>
      </div>
    </header>
  );
}
