"use client";
import React, { useState } from "react";
import Sidebar from "./../../Sidebar";
import TopBar from "./../../TopBar";
import PeriodsTable from "./PeriodsTable";
import "./periode.css";

export default function MainPeriods() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="page">
      <TopBar />
      <Sidebar open={sidebarOpen} toggleOpen={() => setSidebarOpen(!sidebarOpen)} />

      <div className={`content ${sidebarOpen ? "sidebar-open" : ""}`}>
        <PeriodsTable />
      </div>
    </div>
  );
}

