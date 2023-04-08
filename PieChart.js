import React from 'react';
import { Pie } from 'react-chartjs-2';


const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
        {
            label: '# of Votes',
            data: [5, 10, 7],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',

            ],
            borderWidth: 1,
        },
    ],
};



const options = {
    // responsive: true,
    // maintainAspectRatio: false,
    height: 300, // set height
    width: 400, // set width
  };

const PieChart = () => (
    <>
      
                <h1>Pie Chart</h1>
                    <Pie data={data} options={options} />

             

    </>
);

export default PieChart;