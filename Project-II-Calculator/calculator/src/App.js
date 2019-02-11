import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';


const App = () => {
  return (
    <div className="calc-container">
      <CalculatorDisplay />
    </div>
  );
};

export default App;
