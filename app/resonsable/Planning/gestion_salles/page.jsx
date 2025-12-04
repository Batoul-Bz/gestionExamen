"use client";
import React, { useState } from "react";
import Sidebar from "./../../Sidebar";
import TopBar from "./../../TopBar";
import SallesTable from "./SallesTable";
import "./salle.css";

export default function MainSalles() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="page">
      <TopBar />
      <Sidebar
        open={sidebarOpen}
        toggleOpen={() => setSidebarOpen(!sidebarOpen)}
      />
      <div className={`content ${sidebarOpen ? "sidebar-open" : ""}`}>
        <SallesTable />
      </div>
    </div>
  );
}
