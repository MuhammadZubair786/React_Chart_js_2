import { Line } from 'react-chartjs-2'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'



function LineChart() {

    const data = {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Votes',
                data: [12, 19, 30, 5, 2, 3],
                // fill: true,
                backgroundColor: 'rgb(255, 120, 255)',
                borderColor: 'rgba(255, 120, 255, 0.2)',
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