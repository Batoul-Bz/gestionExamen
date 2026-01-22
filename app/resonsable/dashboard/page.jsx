"use client";

import React from "react";
import Sidebar from "../Sidebar";
import TopBar from "../TopBar";

import StatsCards from "./components/StatsCards";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import HistoryList from "./components/HistoryList";
import DonutChart from "./components/DonutChart";

// NOTE: Dashboard styles are imported globally from app/globals.css

export default function DashboardPage() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main-content">
        <TopBar />
        <StatsCards />

        <div
          style={{
            display: "flex",
            gap: "20px",
            width: "100%",
          }}
        >
          <div style={{ flex: "0.8" }}>
            <DonutChart />
          </div>
          <div style={{ flex: "1.2" }}>
            <LineChart />
          </div>
        </div>

        <div style={{ marginTop: "30px" }}>
          <BarChart />
        </div>

        <HistoryList />
      </div>
    </div>
  );
}
