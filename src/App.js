import React, { Component } from 'react';
import math from 'mathjs';
import './App.css';


function Display({ data }) {
  return <div className="Display">{data && data.join('')}</div>
}

function Buttons(props) {
  return <div className="Buttons">{props.children}</div>
}
function Button({ onClick, size, value, label}) {
  return (
    <div onClick={onClick} className="Button" data-size={size} data-value={value}>
      {label}
    </div>
  )
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Display />
        <Buttons>
          <Button label="C" value="clear" />
          <Button label="7" value="7" />
          <Button label="4" value="4" />
          <Button label="1" value="1" />
          <Button label="0" value="0" />

          <Button label="/" value="/" />
          <Button label="8" value="8" />
          <Button label="5" value="5" />
          <Button label="2" value="2" />
          <Button label="." value="." />

          <Button label="x" value="*" />
          <Button label="9" value="9" />
          <Button label="6" value="6" />
          <Button label="3" value="3" />
          <Button label="" value="null" />

          <Button label="-" value="-" />
          <Button label="+" size="2" value="+" />
          <Button label="=" size="2" value="equal" />
        </Buttons>
      </div>
    )
  }
}

export default App
