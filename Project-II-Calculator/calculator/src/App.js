import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import OperatorButton from './components/ButtonComponents/OperatorButton';
import EqualsButton from './components/ButtonComponents/EqualsButton';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      display: 0,
      currentOperator: '',
      previousNumber: 0,
    };
    this.buttonPress = this.buttonPress.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.operatorPress = this.operatorPress.bind(this);
    this.equalsPress = this.equalsPress.bind(this);
  }

  buttonPress = num => {
    if (num !== 0 && this.state.total === 0) {
      this.setState({ total: num, display: num });
    } else {
      this.setState({
        total: this.state.total * 10 + num,
        display: this.state.total * 10 + num
      });
    }
  };

  clearAll = () => this.setState({ total: 0, display: 0 });

  operatorPress = operator => {
    this.setState({
      currentOperator: operator,
      previousNumber: this.state.total,
      display: operator,
      total: 0
    });
  };

  equalsPress = () => {
    if (this.state.currentOperator === '+') {
      this.setState({
        total: this.state.previousNumber + this.state.total,
        display: this.state.previousNumber + this.state.total
      });
    }
    if (this.state.currentOperator === '-') {
      this.setState({
        total: this.state.previousNumber - this.state.total,
        display: this.state.previousNumber - this.state.total
      });
    }
    if (this.state.currentOperator === 'x') {
      this.setState({
        total: this.state.previousNumber * this.state.total,
        display: this.state.previousNumber * this.state.total
      });
    }
    if (this.state.currentOperator === '÷') {
      this.setState({
        total: this.state.previousNumber / this.state.total,
        display: this.state.previousNumber / this.state.total
      });
    }
  };

  render() {
    return (
      <div className="calc-container">
        <CalculatorDisplay num={this.state.display} />
        <ActionButton clearAll={this.clearAll} text="clear" />
        <OperatorButton
          operatorPress={this.operatorPress}
          text="÷"
          buttonStyle="operators"
        />
        <NumberButton
          buttonPress={this.buttonPress}
          text={7}
          buttonStyle="numbers"
        />
        <NumberButton
          buttonPress={this.buttonPress}
          text={8}
          buttonStyle="numbers"
        />
        <NumberButton
          buttonPress={this.buttonPress}
          text={9}
          buttonStyle="numbers"
        />
        <OperatorButton
          operatorPress={this.operatorPress}
          text="x"
          buttonStyle="operators"
        />
        <NumberButton
          buttonPress={this.buttonPress}
          text={4}
          buttonStyle="numbers"
        />
        <NumberButton
          buttonPress={this.buttonPress}
          text={5}
          buttonStyle="numbers"
        />
        <NumberButton
          buttonPress={this.buttonPress}
          text={6}
          buttonStyle="numbers"
        />
        <OperatorButton
          operatorPress={this.operatorPress}
          text="-"
          buttonStyle="operators"
        />
        <NumberButton
          buttonPress={this.buttonPress}
          text={1}
          buttonStyle="numbers"
        />
        <NumberButton
          buttonPress={this.buttonPress}
          text={2}
          buttonStyle="numbers"
        />
        <NumberButton
          buttonPress={this.buttonPress}
          text={3}
          buttonStyle="numbers"
        />
        <OperatorButton
          operatorPress={this.operatorPress}
          text="+"
          buttonStyle="operators"
        />
        <NumberButton
          buttonPress={this.buttonPress}
          text={0}
          buttonStyle="zero"
        />
        <EqualsButton
          equalsPress={this.equalsPress}
          text="="
          buttonStyle="operators"
        />
      </div>
    );
  }
}

export default App;
