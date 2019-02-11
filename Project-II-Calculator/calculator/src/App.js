import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';


const App = () => {
  return (
    <div className="calc-container">
      <CalculatorDisplay />
      <ActionButton props={{ 'text': 'clear' }}/>
      <NumberButton props={{ 'text': '1', 'buttonStyle': 'numbers' }}/>
    </div>
  );
};

export default App;
