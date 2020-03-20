import React, { Component } from 'react';
import './SampleButton.css';
import { Button } from 'react-bootstrap';

class SampleButton extends Component {
  constructor(props) {
    super(props);
    this.audioHandler = React.createRef();
    this.onDrumPadClicked = this.onDrumPadClicked.bind(this);
  }

  onDrumPadClicked() {
    console.log("Clicked button", this.props.item.title);
    const audioElm = this.audioHandler.current;
    audioElm.currentTime = 0;
    audioElm.play();
  }
  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  componentDidUpdate(){
    this.audioHandler.current.volume = 100;
  }

  render() {
    const padItem = this.props.item;
    return (
      <Button className="shadow h-100 rounded"
        block size="lg"
        variant="secondary"
        value={padItem.title} onClick={this.onDrumPadClicked}>
        <audio className="clip" id={padItem.keyTrigger} src={padItem.url} ref={this.audioHandler} />
        {padItem.title} </Button>
    );
  }
}

export default SampleButton;