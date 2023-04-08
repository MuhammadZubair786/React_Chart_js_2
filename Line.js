import { Line } from 'react-chartjs-2'
import React from 'react'

import { Chart } from 'chart.js';
import { CategoryScale } from 'chart.js';
import { LinearScale } from 'chart.js';
import { PointElement } from 'chart.js';
import { LineElement, BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';
Chart.register(LineElement);
Chart.register(PointElement, BarElement);
Chart.register(LinearScale);
function Linech() {
    Chart.register(CategoryScale);
    const data = {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Votes',
                data: [12, 19, 30, 5, 2,3],
                // fill: true,
                backgroundColor: 'yellow',
                borderColor: 'pink',
            },
        ],
    }

    const options = {
        indexAxis: 'x',
    
    };


    return (<>
        <div style={{ width: '400px', height: '400px' }}>
      <Line data={data} width={400} height={400} />
    </div>
      </>
    )
}
export default Linech