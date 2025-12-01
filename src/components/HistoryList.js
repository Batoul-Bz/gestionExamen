
import React from 'react';

export default function HistoryList() {
  const history = [
    { group: 'G2', date: 'Dimanche/mm/aaaa', time: 'Heuremin' },
    { group: 'G6', date: 'Dimanche/mm/aaaa', time: 'Heuremin' },
    { group: 'G2', date: 'Dimanche/mm/aaaa', time: 'Heuremin' }
  ];

  return (
    <div className="history">
      <h3>Historique</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            <span>{item.group}</span>
            <span>{item.date}</span>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
