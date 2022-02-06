import { Line } from 'react-chartjs-2'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
 BarElement,
 LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
 BarElement,
  Title,
  Tooltip,
  Legend
);


function LineChart() {

    const data = {
        // labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
        // datasets: [
        //     {
        //         label: 'Votes',
        //         data: [12, 19, 30, 5, 2, 3],
        //         // fill: true,
        //         backgroundColor: 'rgb(255, 120, 255)',
        //         borderColor: 'rgba(255, 120, 255, 0.2)',
        //     },
        // ],
        datasets: [
            {
              type: 'line',
              label: 'Dataset 1',
              borderColor: 'rgb(54, 162, 235)',
              borderWidth: 2,
              fill: true,
              data: [1,2,5,8,3],
            },
            {
              type: 'bar',
              label: 'Dataset 2',
              backgroundColor: 'rgb(255, 99, 132)',
              data: [1,2,5,8,3],
              borderColor: 'white',
              borderWidth: 2,
            },
            {
              type: 'bar',
              label: 'Dataset 3',
              backgroundColor: 'rgb(75, 192, 192)',
              data: [1,2,5,8,3],
            },
          ],
    }

    return (
        <>
            <h1>hello</h1>
            <Container>
                <Row>
                    <Col lg="6">
                        <h1>Single Line Chart</h1>
                        <Line data={data} />
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default LineChart