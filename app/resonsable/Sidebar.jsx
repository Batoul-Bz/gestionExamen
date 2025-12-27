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
  FaPlus,
} from "react-icons/fa";
import "./SideBar.css";

export default function Sidebar({ open, toggleOpen }) {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { label: "Gestion du profil", icon: <FaUser />, path: "/resonsable/profile" },
    { label: "C & V", icon: <FaSearch />, path: "/resonsable/Planning" },
    { label: "Tableau de bord", icon: <FaChartBar />, path: "/resonsable/dashboard" },
    { label: "Plus", icon: <FaPlus />, path: "/resonsable/plus" },
  ];

  return (
    <div className="sidebar">
      <nav>
        <ul>
          
          <li className="menu-toggle" onClick={toggleOpen}>
            <FaBars className="icon" />
            <span>Menu</span>
          </li>

          
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`menu-item ${
                pathname === item.path ? "active" : ""
              }`}
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
            className={`menu-item ${
              pathname === "/info" ? "active" : ""
            }`}
            onClick={() => router.push("/info")}
          >
            <FaInfoCircle className="icon" />
            <span className="label">Info</span>
          </li>

          <li className="menu-item" onClick={() => router.push("/login")}>
            <FaSignOutAlt className="icon" />
            <span className="label">Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
