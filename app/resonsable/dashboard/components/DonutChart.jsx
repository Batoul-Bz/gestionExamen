
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

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
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      datalabels: {
        color: '#ffffff',
        font: {
          weight: 'bold',
          size: 14
        },
        formatter: (value) => `${value}%` 
      }
    },
    cutout: '70%'
  };

  return (
    <div style={{
      width: '90%',
      height: '350px',
      background: '#fff',
      padding: '20px',
      borderRadius: '12px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <h4 style={{ color: '#0b1a57', marginBottom: '10px' }}>L’état des examens</h4>
      
      <div style={{ flex: 1,
        
       }}>
        <Doughnut data={data} options={options} />
      </div>

  
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '10px',
        fontSize: '14px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '14px', height: '14px', background: '#a8c5f5', borderRadius: '4px' }}></span>
          Accepté
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '14px', height: '14px', background: '#0b1a57', borderRadius: '4px' }}></span>
          Refusé
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '14px', height: '14px', background: '#d6c8f5', borderRadius: '4px' }}></span>
          En attente
        </div>
      </div>
    </div>
  );
}
