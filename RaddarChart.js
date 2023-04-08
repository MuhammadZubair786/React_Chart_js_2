import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart,registerables } from 'chart.js';
Chart.register(...registerables);
function RadarChart() {
  const data = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      {
        label: 'My First Radar Chart',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 90, 81, 56, 55, 40]
      }
    ]
  };

  const options = {
    scale: {
      ticks: { beginAtZero: true },
      angleLines: { display: false },
      pointLabels: { fontSize: 14 }
    },
    legend: { display: false }
  };

  return (
    <div>
      <h2>Radar Chart Example</h2>
      <Radar data={data} options={options} />
    </div>
  );
}

export default RadarChart;
