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
            currentValue: '0',
            currentExpression: '',
            evaluated: false
        };
        // Handle the handler functions
        this.handleNumbers = this.handleNumbers.bind(this);
        this.handleOperators = this.handleOperators.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleDecimal = this.handleDecimal.bind(this);
        this.handleEquals = this.handleEquals.bind(this);
    }

    handleNumbers(e) {
        const currentNumber = e.target.value;
        // Add the number to the array
        const currentVal = this.state.currentValue;
        const expr = this.state.currentExpression;
        // Initial state of calculator
        if(expr === '' && currentVal === '0') {
            this.setState({
                currentExpression: expr + currentNumber,
                currentValue: currentNumber
            });
        } else {
            // Check if the current value is number
            if(isNumber.test(currentVal) || isValidDecimal.test(currentVal)) {
                this.setState({
                    currentExpression: expr + currentNumber,
                    currentValue: currentVal + currentNumber,
                });
            } else if(isOperator.test(currentVal)) {
                this.setState({
                    currentValue: currentNumber,
                    currentExpression: expr + currentNumber
                });
            }
        }
    }

    handleOperators(e) {
        // Handle +, -, *, /
        const enteredOperator = e.target.value;
        // Initial state do not
        const expr = this.state.currentExpression;
        const currVal = this.state.currentValue;
        if(!(expr === '')) {
            // if an operator was entered, check if it is the same
            // if it is the same, do not do anything
            // if it is not then replace the current value
            if(isEndsWithOperatorWithMinus.test(expr)) {
                let newExpr = expr.slice(0, -2);
                this.setState({
                    currentValue: enteredOperator,
                    currentExpression: newExpr + enteredOperator
                });
            } else if(isEndsWithOperator.test(expr)) {
                if(enteredOperator === '-') {
                    if(currVal !== enteredOperator) {
                        this.setState({
                            currentValue: enteredOperator,
                            currentExpression: expr + enteredOperator
                        });
                    }
                } else {
                    if(currVal !== enteredOperator) {
                        let newExpr = expr.slice(0, -1);
                        this.setState({
                            currentValue: enteredOperator,
                            currentExpression : newExpr + enteredOperator
                        });
                    }
                }
            } else {
                // In none of the above cases,
                // Just add the operator to the current expression
                this.setState({
                    currentValue: enteredOperator,
                    currentExpression: expr + enteredOperator
                });
            }
        }
    }

    handleClear(e) {
        // Clear all the values
        this.setState({
            currentValue: '0',
            currentExpression: '',
            evaluated: false
        })
    }

    handleEquals(e) {
        //////// Evaluate the expression ///////////
        // Things to take care of:
        //  1. Expression might end with an operator
        //  2. Expression might end with an operator and a minus sign
        //  3. Equals might be pressed with an empty expression
        
    }

    handleDecimal(e) {

    }

    handleExpression(currentValue) {
        const currVal = this.state.currentVal;
        const expression = this.state.formula;
        // Set state
        this.setState({
            formula: expression,
            currentVal: currVal + currentValue,
        });
    }
    
    render() {
        return (
            <div className="App">
                <div className="calculator">
                    <Display currentExpression={this.state.currentExpression} displayValue={this.state.currentValue}/>
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
