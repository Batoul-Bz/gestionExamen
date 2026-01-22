"use client";

import React, { useState } from "react";
import Sidebar from "./../../Sidebar";
import TopBar from "./../../TopBar";
import SessionTable from "./SessionTable";
import "./Session.css";

export default function MainExamSessions() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="page">
      <TopBar />
      <Sidebar
        open={sidebarOpen}
        toggleOpen={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className={`content ${sidebarOpen ? "sidebar-open" : ""}`}>
        <SessionTable />
      </div>
    </div>
  );
}
