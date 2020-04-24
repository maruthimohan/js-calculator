import React from 'react';
import './ButtonPanel.scss';

export default class ButtonPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div className="button-panel">
                <button id="clear" value="clear" className="button clear-all" onClick={this.props.handleClear}>AC</button>
                <button className="button clear">%</button>
                <button className="button clear">+/-</button>
                <button id="divide" value="/" className="button operator" onClick={this.props.handleOperator}>
                    /
                </button>

                <button id="one" value="1" className="button number" onClick={this.props.handleNumber}>1</button>
                <button id="two" value="2" className="button number" onClick={this.props.handleNumber}>2</button>
                <button id="three" value="3" className="button number" onClick={this.props.handleNumber}>3</button>
                <button id="multiply" value="*" className="button operator" onClick={this.props.handleOperator}>
                    x
                </button>

                <button id="four" value="4" className="button number" onClick={this.props.handleNumber}>4</button>
                <button id="five" value="5" className="button number" onClick={this.props.handleNumber}>5</button>
                <button id="six" value="6" className="button number" onClick={this.props.handleNumber}>6</button>
                <button id="subtract" value="-" className="button operator" onClick={this.props.handleOperator}>
                    -
                </button>

                <button id="seven" value="7" className="button number" onClick={this.props.handleNumber}>7</button>
                <button id="eight" value="8" className="button number" onClick={this.props.handleNumber}>8</button>
                <button id="nine" value="9" className="button number" onClick={this.props.handleNumber}>9</button>
                <button id="add" value="+" className="button operator" onClick={this.props.handleOperator}>
                    +
                </button>

                <button id="zero" value="0" className="button zero number" onClick={this.props.handleNumber}>0</button>
                <button id="decimal" value="." className="button operator dot" onClick={this.props.handleDecimal}>.</button>
                <button id="equals" value="=" className="button operator" onClick={this.props.handleEquals}>
                    =
                </button>
            </div>
        );
    }
}