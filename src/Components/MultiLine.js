import React from 'react';
import { Line } from 'react-chartjs-2';

import { Container, Row, Col } from 'react-bootstrap'
const data = {
  labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      //   yAxisID: 'y-axis-1',
    },
    {
      label: '# of No Votes',
      data: [1, 20, 1, 1, 2, 2],
      fill: false,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
      //   yAxisID: 'y-axis-2',
    },
  ],
};



const MultiAxisLine = () => (
  <>
    <div className='header'>

    </div>
    <Container>
      <Row>
        <Col lg="6">
        <h1>Multi Line Chart</h1>
          <Line data={data} />
        </Col>
      </Row>
    </Container>
  </>
);

export default MultiAxisLine;