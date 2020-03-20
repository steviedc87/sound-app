import React from 'react';
import './App.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import SampleButton from './SampleButton/SampleButton';

const samples = [{
    id: 1,
    title: "Test 1",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
    id: 2,
    title: "Test 2",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
    id: 3,
    title: "Test 3",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
    id: 4,
    title: "Test 4",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    //url needed here to load the sample
}, {
    id: 5,
    title: "Test 5",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    //url needed here to load the sample
}, {
    id: 6,
    title: "Test 6",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    //url needed here to load the sample
}, {
    id: 7,
    title: "Test 7",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    //url needed here to load the sample
}, {
    id: 8,
    title: "Test 8",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    //url needed here to load the sample
}, {
    id: 9,
    title: "Test 9",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
},
{
    id: 10,
    title: "Test 10",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    //url needed here to load the sample
}, {
    id: 11,
    title: "Test 11",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    //url needed here to load the sample
}, {
    id: 12,
    title: "Test 12",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
    id: 13,
    title: "Test 13",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    //url needed here to load the sample
}, {
    id: 14,
    title: "Test 14",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    //url needed here to load the sample
}, {
    id: 15,
    title: "Test 15",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
    id: 16,
    title: "Test 16",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
},{
    id: 17,
    title: "Test 17",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
    id: 18,
    title: "Test 18",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
    id: 19,
    title: "Test 19",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
    id: 20,
    title: "Test 20",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    //url needed here to load the sample
}, {
    id: 21,
    title: "Test 21",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    //url needed here to load the sample
}, {
    id: 22,
    title: "Test 22",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    //url needed here to load the sample
}, {
    id: 23,
    title: "Test 23",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    //url needed here to load the sample
}, {
    id: 23,
    title: "Test 23",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    //url needed here to load the sample
}, {
    id: 24,
    title: "Test 24",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
},
{
    id: 25,
    title: "Test 25",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    //url needed here to load the sample
}, {
    id: 26,
    title: "Test 26",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    //url needed here to load the sample
}, {
    id: 27,
    title: "Test 27",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
    id: 28,
    title: "Test 28",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    //url needed here to load the sample
}, {
    id: 29,
    title: "Test 29",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    //url needed here to load the sample
}, {
    id: 30,
    title: "Test 30",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
    id: 31,
    title: "Test 31",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
    id: 32,
    title: "Test 32",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    //url needed here to load the sample
}, {
    id: 33,
    title: "Test 33",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
    id: 34,
    title: "Test 34",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}]


function App() {
    return (<Row className="d-flex h-100 justify-content-start"> {
        samples.map((item, idx) => {
            var style = "p-xs-3 p-sm-2 p-md-2 p-lg-1 p-xl-3";
            if(idx%5==0){
                style+=" offset-lg-1"
            }
            return <Col key={idx} xl={2} lg={2}
                className= {style} >
                <SampleButton item={item}></SampleButton>
            </Col >
        })
    } </Row>
    );
}

export default App;