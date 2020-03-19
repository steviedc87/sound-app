import React from 'react';
import './App.css';
import { Row, Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const samples = [{
  id: 1,
  title: "Test 1"
  //url needed here to load the sample
},{
  id: 2,
  title: "Test 2"
  //url needed here to load the sample
},{
  id: 3,
  title: "Test 3"
  //url needed here to load the sample
},{
  id: 4,
  title: "Test 4"
  //url needed here to load the sample
},{
  id: 5,
  title: "Test 5"
  //url needed here to load the sample
},{
  id: 6,
  title: "Test 6"
  //url needed here to load the sample
},{
  id: 7,
  title: "Test 7"
  //url needed here to load the sample
},{
  id: 8,
  title: "Test 8"
  //url needed here to load the sample
},{
  id:9,
  title : "Test 9"
}]

//TODO create a new component for the sample buttons, check documentation

function App() {
  return (
      <Row className="d-flex justify-content-around">
      {
        samples.map((item, idx) => {
          return <Col xs lg={3} className="p-3">
            <Button className="shadow h-100 rounded" block size="lg" variant="secondary" value={item.title}>{item.title}</Button>{' '}</Col>
        })
      }
      </Row>
  );
}

export default App;
