import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

class App extends React.Component {
  constructor() {
    super()
    this.state={

    }
  }
  render() {
    return (
      <div className="calc-container">
      <CalculatorDisplay />
      <ActionButton props={{ text: 'clear' }} />
      <NumberButton props={{ text: '÷', buttonStyle: 'operators' }} />
      <NumberButton props={{ text: '7', buttonStyle: 'numbers' }} />
      <NumberButton props={{ text: '8', buttonStyle: 'numbers' }} />
      <NumberButton props={{ text: '9', buttonStyle: 'numbers' }} />
      <NumberButton props={{ text: 'x', buttonStyle: 'operators' }} />
      <NumberButton props={{ text: '4', buttonStyle: 'numbers' }} />
      <NumberButton props={{ text: '5', buttonStyle: 'numbers' }} />
      <NumberButton props={{ text: '6', buttonStyle: 'numbers' }} />
      <NumberButton props={{ text: '-', buttonStyle: 'operators' }} />
      <NumberButton props={{ text: '1', buttonStyle: 'numbers' }} />
      <NumberButton props={{ text: '2', buttonStyle: 'numbers' }} />
      <NumberButton props={{ text: '3', buttonStyle: 'numbers' }} />
      <NumberButton props={{ text: '+', buttonStyle: 'operators' }} />
      <ActionButton props={{ text: '0' }} />
      <NumberButton props={{ text: '=', buttonStyle: 'operators' }} />
    </div>
    )
  }
};

export default App;