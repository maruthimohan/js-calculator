import React from 'react';
import './Display.scss';

export default class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="display-box">
                {/* <div className="header">CALCULATOR</div> */}
                <div className="display-content">
                    <div className="formula">2 x 3 - 4 / 5</div>
                    <div id="display" className="result">34235</div>
                </div>
            </div>
        );
    }
}