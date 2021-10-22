
   
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Container, Row, Col } from 'react-bootstrap'

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Red Votes',
        data: [12, 19, 3, 5, 2, 3],
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
        backgroundColor: 'rgb(75, 192, 192)',
        stack: 'Stack 2',
      },
    ],
  };
  

const options = {
  indexAxis: 'x',
  
 
  
};

const MultiBarChart = () => (
  <>
   
   <Container>
      <Row>
        <Col lg="6">
        <h1>Multi bar Chart</h1>

          <Bar data={data} options={options} height={300} />
        </Col>
      </Row>
    </Container>

  </>
);

export default MultiBarChart

