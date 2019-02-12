import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0
    };
    this.buttonPress = this.buttonPress.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  buttonPress = num => {
    if (this.state.total === 0) {
      this.setState({ total: num });
    } else {
      this.setState({ total: this.state.total + num });
    }
  };

  clearAll = () => this.setState({ total: 0 });

  render() {
    return (
      <div className="calc-container">
        <CalculatorDisplay num={this.state.total} />
        <ActionButton clearAll={this.clearAll} text="clear" />
        <NumberButton text="÷" buttonStyle="operators" />
        <NumberButton
          buttonPress={this.buttonPress}
          text="7"
          buttonStyle="numbers"
        />
        <NumberButton
          buttonPress={this.buttonPress}
          text="8"
          buttonStyle="numbers"
        />
        <NumberButton
          buttonPress={this.buttonPress}
          text="9"
          buttonStyle="numbers"
        />
        <NumberButton text="x" buttonStyle="operators" />
        <NumberButton
          buttonPress={this.buttonPress}
          text="4"
          buttonStyle="numbers"
        />
        <NumberButton
          buttonPress={this.buttonPress}
          text="5"
          buttonStyle="numbers"
        />
        <NumberButton
          buttonPress={this.buttonPress}
          text="6"
          buttonStyle="numbers"
        />
        <NumberButton text="-" buttonStyle="operators" />
        <NumberButton
          buttonPress={this.buttonPress}
          text="1"
          buttonStyle="numbers"
        />
        <NumberButton
          buttonPress={this.buttonPress}
          text="2"
          buttonStyle="numbers"
        />
        <NumberButton
          buttonPress={this.buttonPress}
          text="3"
          buttonStyle="numbers"
        />
        <NumberButton text="+" buttonStyle="operators" />
        <NumberButton
          buttonPress={this.buttonPress}
          text="0"
          buttonStyle="zero"
        />
        <NumberButton text="=" buttonStyle="operators" />
      </div>
    );
  }
}

export default App;
