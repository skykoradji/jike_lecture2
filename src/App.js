import React, { Component } from 'react';
import math from 'mathjs';
import './App.css';
import Button from './Button';
import Buttons from './Buttons';
import Display from './Display';
class App extends Component {

  state = {
    operations: []
  };

  calculation() {

  }

  handleClick = (event) => {
    const value = event.target.getAttribute('data-value');
    switch(value) {
      case 'clear': 
        this.setState({
          operations: []
        });
        break;
      case 'equal': 
        this.calculation();
        break;
      default: 
        this.setState((prevState) => {
          prevState.operations.push(value);
          return prevState;
        });
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <Display data={this.state.operations}/>
        <Buttons>
          <Button onClick={this.handleClick} label="C" value="clear" />
          <Button onClick={this.handleClick} label="7" value="7" />
          <Button onClick={this.handleClick} label="4" value="4" />
          <Button onClick={this.handleClick} label="1" value="1" />
          <Button onClick={this.handleClick} label="0" value="0" />

          <Button onClick={this.handleClick} label="/" value="/" />
          <Button onClick={this.handleClick} label="8" value="8" />
          <Button onClick={this.handleClick} label="5" value="5" />
          <Button onClick={this.handleClick} label="2" value="2" />
          <Button onClick={this.handleClick} label="." value="." />

          <Button onClick={this.handleClick} label="x" value="*" />
          <Button onClick={this.handleClick} label="9" value="9" />
          <Button onClick={this.handleClick} label="6" value="6" />
          <Button onClick={this.handleClick} label="3" value="3" />
          <Button onClick={this.handleClick} label="" value="null" />

          <Button onClick={this.handleClick} label="-" value="-" />
          <Button onClick={this.handleClick} label="+" size="2" value="+" />
          <Button onClick={this.handleClick} label="=" size="2" value="equal" />
        </Buttons>
      </div>
    )
  }
}

export default App
