import React from 'react';
import './App.scss';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

// Regular Expressions
const isValidDecimal = /[0-9]+.{1}[0-9]+/;
const isEndsWithOperator = /[+-/*]$/;
const isEndsWithOperatorWithMinus = /[+-/*]-$/;
const isOperator = /[+-/*]/;
const isNumber = /[0-9]+/;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentVal: '0',
            formula: '',
            formulaArray: [],
            evaluated: false
        };
        // Handle the handler functions
        this.handleNumbers = this.handleNumbers.bind(this);
        this.handleOperators = this.handleOperators.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleDecimal = this.handleDecimal.bind(this);
        this.handleEquals = this.handleEquals.bind(this);
        this.handleExpression = this.handleExpression.bind(this);
    }

    handleNumbers(e) {
        const currentNumber = e.target.value;
        // Add the number to the array
        const currentValue = this.state.currentVal;
        // Check if the current value is number
        if(isNumber.test(currentValue) || isValidDecimal(currentValue)) {
            this.handleExpression(currentNumber);
        }
    }

    handleOperators(e) {

    }

    handleClear(e) {
        // Clear all the values
        this.setState({
            currentVal: '0',
            formula: '',
            formulaArray: [],
            evaluated: false
        })
    }

    handleEquals(e) {

    }

    handleDecimal(e) {

    }

    handleExpression(currentValue) {
        const formulaArr = this.state.formulaArray;
        const currVal = this.state.currentVal;
        formulaArr.push(currentValue);
        // Set state
        this.setState({
            formulaArray: formulaArr,
            formula: formulaArr.join(''),
            currentVal: currVal + currentValue,
        });
    }
    
    render() {
        return (
            <div className="App">
                <div className="calculator">
                    <Display currentExpression={this.state.formula} displayValue={this.state.currentVal}/>
                    <ButtonPanel 
                        handleNumber={this.handleNumbers}
                        handleOperator={this.handleOperators}
                        handleDecimal={this.handleDecimal}
                        handleClear={this.handleClear}
                        handleEquals={this.handleEquals}
                    />
                </div>
            </div>
        );
    }
}

export default App;
