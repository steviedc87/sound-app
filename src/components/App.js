import React from 'react';
import './App.css';
import { Row, Container, Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const samples = [{
  id: 1,
  title: "Test 1"
  //url needed here to load the sample
}]

function App() {
  return (
    <Container>
      <Row className="d-flex justify-content-around">
      {
        samples.map((item, idx) => {
          return <Col xs lg={3} className="m-2">
            <Button className="shadow h-100 p-3 mb-5 rounded" block size="lg" variant="secondary" value={item.title}>{item.title}</Button>{' '}</Col>
        })
      }
      </Row>
    </Container>
  );
}

export default App;
