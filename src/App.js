import React, { Component } from 'react';
import './App.css';
import Display from './Display/Display';
import Button from './Button/Button';

class App extends Component {

  constructor() {
    super();
    this.state = {
      calcString: '',
      answer: '',
      calcEnabled: true
    }
  }

  numberButtonClickHandler = (e) => {
    let localString = this.state.calcString;
    let enabled = true;
    if (localString.length <= 50) {
      localString += e.target.value;
    } else {
      localString = 'Error';
      enabled = false;
    }
    this.setState({ calcString: localString, calcEnabled: enabled  });
  }

  operationButtonClickHandler = (e) => {
    let localString = this.state.calcString;
    let enabled = true;
    let calcArray = localString.split('');
    if (calcArray.pop() === '+' || calcArray.pop() === '-' || calcArray.pop() === '/' || calcArray.pop() === '*') {
      return;
    } else {
      if (localString.length <= 50) {
        localString += e.target.value;
      } else {
        localString = 'Error';
        enabled = false;
      }
      this.setState({ calcString: localString, calcEnabled: enabled });
    }
  }

  equalButtonClickHandler = (e) => {
    let calculation = this.state.calcString;
    let answer = eval(calculation);
    this.setState({ answer })
  }

  clearButtonClickHandler = (e) => {
    const clearString = '';
    const clearAnswer = '';
    const enabled = 'true';
    this.setState({ calcString: clearString, answer: clearAnswer, calcEnabled: enabled });
  }
  
  render() {
    return (
      <div className="App">
        <header>
          <h1>React - Calculator</h1>
        </header>
        <main>
          <div className="calculatorBody">
            <Display calc={ this.state.calcString } answer={ this.state.answer } />
            <div className="row">
              <Button value="7" click={ this.numberButtonClickHandler } status={ this.state.calcEnabled } />
              <Button value="8" click={ this.numberButtonClickHandler } status={ this.state.calcEnabled } />
              <Button value="9" click={ this.numberButtonClickHandler } status={ this.state.calcEnabled } />
              <Button value="/" click={ this.operationButtonClickHandler } status={ this.state.calcEnabled } />
            </div>
            <div className="row">
              <Button value="4" click={ this.numberButtonClickHandler } status={ this.state.calcEnabled } />
              <Button value="5" click={ this.numberButtonClickHandler } status={ this.state.calcEnabled } />
              <Button value="6" click={ this.numberButtonClickHandler } status={ this.state.calcEnabled } />
              <Button value="*" click={ this.operationButtonClickHandler } status={ this.state.calcEnabled } />
            </div>
            <div className="row">
              <Button value="1" click={ this.numberButtonClickHandler } status={ this.state.calcEnabled } />
              <Button value="2" click={ this.numberButtonClickHandler } status={ this.state.calcEnabled } />
              <Button value="3" click={ this.numberButtonClickHandler } status={ this.state.calcEnabled } />
              <Button value="+" click={ this.operationButtonClickHandler } status={ this.state.calcEnabled } />
            </div>
            <div className="row">
              <Button value="0" click={ this.numberButtonClickHandler } status={ this.state.calcEnabled } />
              <Button value="C" click={ this.clearButtonClickHandler } status="true" />
              <Button value="=" click={ this.equalButtonClickHandler } status={ this.state.calcEnabled } />
              <Button value="-" click={ this.operationButtonClickHandler } status={ this.state.calcEnabled } />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
