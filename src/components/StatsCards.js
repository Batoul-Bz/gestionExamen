
import React from 'react';
import './StatsCards.css';

export default function StatsCards() {
  const stats = [
    { label: 'Ensegniant', value: 32, icon: '🏫' },
    { label: 'Etudiants', value: 1235, icon: '🎓' },
    { label: 'Examens', value: 50, icon: '📄' }
  ];

  return (
    <div className="stats-container">
      {stats.map((item, index) => (
        <div key={index} className="card">
          <span className="icon">{item.icon}</span>
          <h3>{item.value}</h3>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
}
