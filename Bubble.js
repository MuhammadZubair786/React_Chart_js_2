import { Line,Bubble } from 'react-chartjs-2'
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


function LineMulti() {
    Chart.register(CategoryScale);

    const data = {
        datasets: [{
          label: 'First Dataset',
          data: [{
            x: 20,
            y: 30,
            r: 15
          }, {
            x: 40,
            y: 10,
            r: 10
          }],
          backgroundColor: 'rgb(255, 99, 132)'
        }]
      };s


    return (<>
        <div style={{ width: '400px', height: '400px' }}>
      <Bubble data={data} width={400} height={400}  options={options}/>
    </div>
    
    </>
    )
}
export default LineMulti