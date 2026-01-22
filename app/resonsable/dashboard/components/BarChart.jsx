
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
    maintainAspectRatio: false, // ✅ يسمح بالتمدد
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#0b1a57',
          font: { size: 14 }
        }
      },
      title: {
        display: true,
        text: 'Nombre salles',
        color: '#0b1a57',
        font: { size: 18, weight: 'bold' }
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
      width: '100%',
      height: '400px', // ✅ تكبير الرسم
      background: '#fff', // ✅ خلفية بيضاء
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <Bar data={data} options={options} />
    </div>
  );
}
