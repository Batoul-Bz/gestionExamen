
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Topbar';
import StatsCards from '../components/StatsCards';
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
import HistoryList from '../components/HistoryList';
import DonutChart from '../components/DonutChart';
import dashboard from './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar/>
      <div className="main-content">
        <Header />
        <StatsCards />
        <div className="charts-container">
          <DonutChart />  <LineChart />
        
        </div>
        <BarChart />
        <HistoryList />
      </div>
      


</div>

    
    
  );
}
