import React from 'react';
import './App.scss';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

// Regular Expressions
const isValidDecimal = /[0-9]+.{1}[0-9]+/;
const isEndsWithOperator = /[*/+-]$/;
const isEndsWithOperatorWithMinus = /[*/+-]-$/;
const isOperator = /[*/+-]/;
const isNumber = /[0-9]+/;
// NOTE: A VERY CURIOUS CONCEPT
// When the group of Operators are in the order /[+-/*]/ it matches a dot(.) too,
// and when the order of Operators is changed to /[*/+-]/ it does not match a dot(.)

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
        if((expr === '' && currentVal === '0')) {
            this.setState({
                currentExpression: expr + currentNumber,
                currentValue: currentNumber
            });
        } else if(this.state.evaluated) {
            // If it has been evaluated already
            // then start the application as a whole with the entered value
            this.setState({
                currentValue: currentNumber,
                currentExpression: currentNumber,
                evaluated: false
            });
        } else if(isNumber.test(currentVal) || isValidDecimal.test(currentVal)) {
            // Doesn't allow the number to start with more than one zero
            if((currentVal === '0' && currentNumber !== '0')) {
                // Replace the zeroes and start entering the numbers
                this.setState({
                    currentExpression: currentNumber,
                    currentValue: currentNumber,
                });
            } else if(currentVal !== '0') {
                this.setState({
                    currentExpression: expr + currentNumber,
                    currentValue: currentVal + currentNumber,
                });
            }
        } else if(isOperator.test(currentVal)) {
            this.setState({
                currentValue: currentNumber,
                currentExpression: expr + currentNumber
            });
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
            if(this.state.evaluated) {
                this.setState({
                    currentValue: enteredOperator,
                    currentExpression: currVal + enteredOperator,
                    evaluated: false
                });
            } else if(isEndsWithOperatorWithMinus.test(expr)) {
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

    handleDecimal(e) {
        // Handle the Decimal value entry in the calculator
        // Points to note
            // Decimal might be entered right after equals
            // Decimal might be entered when the current value is zero and expr is zero
            // Decimal might be entered when the current value is zero and expr is empty
            // Decimal entered after an Operator
        const currVal = this.state.currentValue;
        const expr = this.state.currentExpression;
        if(this.state.evaluated) {
            console.log('this.state.evaluated');
            let newVal = '0.'
            this.setState({
                currentValue: newVal,
                currentExpression: newVal,
                evaluated: false
            });
        } else if(expr === '') {
            console.log('expr === ""');
            let newVal = '0.';
            this.setState({
                currentValue: newVal,
                currentExpression: newVal,
            })
        } else if(isOperator.test(currVal)) {
            console.log('isOperator');
            let newVal = '0.';
            this.setState({
                currentValue: newVal,
                currentExpression: expr + newVal
            });
        } else if(currVal.indexOf('.') < 0){
            console.log('currVal.indexOf(.) < 0');
            this.setState({
                currentValue: currVal + '.',
                currentExpression: expr + '.'
            });
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
        const expr = this.state.currentExpression;
        const currVal = this.state.currentValue;
        if(expr !== '' && !this.state.evaluated) {
            if(isEndsWithOperatorWithMinus.test(expr)) {
                let newExpr = expr.slice(0, -2);
                let result = eval(newExpr);
                this.setState({
                    currentValue: result,
                    currentExpression: `${newExpr}=${result}`,
                    evaluated: true
                });
            } else if(isEndsWithOperator.test(expr)) {
                let newExpr = expr.slice(0, -1);
                let result = eval(newExpr);
                this.setState({
                    currentValue: result,
                    currentExpression: `${newExpr}=${result}`,
                    evaluated: true
                })
            } else {
                let result = eval(expr);
                this.setState({
                    currentValue: result,
                    currentExpression: `${expr}=${result}`,
                    evaluated: true
                });
            }
        }
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
