
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DonutChart() {
  const data = {
    labels: ['Accepté', 'Refusé', 'En attente'],
    datasets: [
      {
        data: [65, 25, 10],
        backgroundColor: ['#a8c5f5', '#0b1a57', '#d6c8f5'],
        borderWidth: 0
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#0b1a57'
        }
      }
    },
    cutout: '70%'
  };

  return (
    <div style={{ width: '250px', background: '#fff', padding: '15px', borderRadius: '12px' }}>
      <h4 style={{ color: '#0b1a57', marginBottom: '10px' }}>L'état des examens</h4>
      <Doughnut data={data} options={options} />
      <div style={{ marginTop: '10px', fontSize: '0.9rem' }}>
        
      </div>
    </div>
  );
}
