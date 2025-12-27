"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  FaBars,
  FaUser,
  FaSearch,
  FaChartBar,
  FaInfoCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import "./SideBar.css";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { label: "Profil", icon: <FaUser />, path: "/proffesseurs/profile" },
    { label: "Emploi du temps", icon: <FaSearch />, path: "/proffesseurs/Planning" },
    { label: "Dashboard", icon: <FaChartBar />, path: "/proffesseurs/dashboard" },
  ];

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li className="menu-toggle">
            <FaBars className="icon" />
            <span className="label">Menu</span>
          </li>

          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`menu-item ${pathname === item.path ? "active" : ""}`}
              onClick={() => router.push(item.path)}
            >
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="bottom-icons">
        <ul>
          <li
            className={`menu-item ${pathname === "/info" ? "active" : ""}`}
            onClick={() => router.push("/info")}
          >
            <FaInfoCircle className="icon" />
            <span className="label">Info</span>
          </li>

          <li className="menu-item logout" onClick={() => router.push("/login")}>
            <FaSignOutAlt className="icon" />
            <span className="label">Logout</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}
