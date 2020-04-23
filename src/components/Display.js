import React from 'react';
import './Display.scss';

export default class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentVal: '0',
            currentExpression: ''
        };
    }

    render() {
        return (
            <div className="display-box">
                {/* <div className="header">CALCULATOR</div> */}
                <div className="display-content">
                    <div className="formula">{this.props.currentExpression}</div>
                    <div id="display" className="result">{this.props.displayValue}</div>
                </div>
            </div>
        );
    }
}