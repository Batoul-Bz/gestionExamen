
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function LineChart() {
  const data = {
    labels: ['sa', 'di', 'lu', 'ma', 'me', 'je', 've'],
    datasets: [
      {
        label: 'Nombre des examens',
        data: [0, 1, 2, 3, 3, 4, 1],
        borderColor: '#0b1a57',
        backgroundColor: '#0b1a57',
        tension: 0.3,
        pointRadius: 5,
        pointBackgroundColor: '#0b1a57'
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Nombre des examens',
        color: '#0b1a57'
      }
    },
    scales: {
      x: {
        ticks: { color: '#0b1a57' }
      },
      y: {
        ticks: { color: '#0b1a57' },
        beginAtZero: true
      }
    }
  };

  return (
    <div style={{
      width: '90%',
      height: '350px', // ✅ أكبر من الرسم الدائري
      background: '#fff',
      padding: '20px',
      borderRadius: '12px'
    }}>
      <Line data={data} options={options} />
    </div>
  );
}
