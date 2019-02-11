import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';


const App = () => {
  return (
    <div className="calc-container">
      <CalculatorDisplay />
      <NumberButton props={{ 'text': '1', 'buttonStyle': 'numbers' }}/>
    </div>
  );
};

export default App;
