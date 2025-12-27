"use client";

import { useRouter } from "next/navigation";
import "./styles.css";

export default function TopBar() {
  const router = useRouter();

  const goToProfile = () => {
    router.push("/resonsable/profile");   
  };

  return (
    <header className="top-bar">
      <div className="logo">
        <img src="/icon/logo.png" alt="logo" />
      </div>

      <div className="user-box">
        <button className="notif-btn">
          <img src="/icon/bell.png" className="notif-icon" />
        </button>

        <button className="user-info" onClick={goToProfile}>
          <div className="user-avatar"></div>
          <div>
            <div className="user-text-main">user Name</div>
            <div className="user-text-sub">Ensegnant</div>
          </div>
        </button>
      </div>
    </header>
  );
}
