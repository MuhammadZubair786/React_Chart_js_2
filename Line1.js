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


function LineMulti() {
    Chart.register(CategoryScale);

    const data = {

      

        
        labels: ['1', '2', '3', '4', '5', '6',"asad"],
        datasets: [
            {
                label: '# of Red Votes',
                data: [12, 19, 3, 5, 2, 3,8],
                backgroundColor: 'rgb(255, 99, 132)',
                stack: 'Stack 0',
            },
            {
                label: '# of Blue Votes',
                data: [2, 3, 20, 5, 1, 4],
                backgroundColor: 'rgb(54, 162, 235)',
                stack: 'Stack 1',
            },
            {
                label: '# of Green Votes',
                data: [3, 10, 13, 15, 22, 30],
                backgroundColor: 'green',
                stack: 'Stack 2',
            },
        ],
    }

  

    const options = {
        indexAxis: 'x',
       


    };


    return (<>
        <div style={{ width: '400px', height: '400px' }}>
      <Line data={data} width={400} height={400}  options={options}/>
    </div>
    
    </>
    )
}
export default LineMulti