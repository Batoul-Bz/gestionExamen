
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarChart() {
  const data = {
    labels: ['sa', 'di', 'lu', 'ma', 'me', 'je'],
    datasets: [
      {
        label: 'Les salles occuper',
        data: [9, 16, 5, 11, 12, 3],
        backgroundColor: '#0b1a57'
      },
      {
        label: 'Les salles disponibles',
        data: [4, 2, 11, 7, 2, 16],
        backgroundColor: '#d6c8f5'
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
      title: { display: true, text: 'Nombre salles' }
    }
  };

  return (
    <div style={{ width: '500px', margin: '20px auto' }}>
      <Bar data={data} options={options} />
    </div>
  );
}
