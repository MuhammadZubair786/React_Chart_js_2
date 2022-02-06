import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Container, Row, Col } from 'react-bootstrap'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

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

const PieChart = () => (
    <>
        <Container>
            <Row>
                <Col lg="6">
                <h1>Pie Chart</h1>
                    <Pie data={data} />

                </Col>
            </Row>
        </Container>

    </>
);

export default PieChart;