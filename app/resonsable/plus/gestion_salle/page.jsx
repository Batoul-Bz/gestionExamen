"use client";
import { useState } from "react";
import TopBar from "./../../TopBar";
import Sidebar from "./../../Sidebar";

import SallesTable from "./SallesTable";
import "./salle.css";

export default function MainSalles() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((v) => !v);

  return (
    <div className="layout">
      <Sidebar open={open} toggleOpen={toggleOpen} />
      <div className="main">
        <TopBar />
        <div className="page-content">
          <SallesTable />
        </div>
      </div>
    </div>
  );
}

