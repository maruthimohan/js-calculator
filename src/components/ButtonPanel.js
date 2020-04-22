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
                <button id="clear" className="button clear-all">AC</button>
                <button className="button clear">%</button>
                <button className="button clear">+/-</button>
                <button id="divide" className="button operator">
                    /
                </button>

                <button id="one" className="button number">1</button>
                <button id="two" className="button number">2</button>
                <button id="three" className="button number">3</button>
                <button id="multiply" className="button operator">
                    x
                </button>

                <button id="four" className="button number">4</button>
                <button id="five" className="button number">5</button>
                <button id="six" className="button number">6</button>
                <button id="subtract" className="button operator">
                    -
                </button>

                <button id="seven" className="button number">7</button>
                <button id="eight" className="button number">8</button>
                <button id="nine" className="button number">9</button>
                <button id="add" className="button operator">
                    +
                </button>

                <button id="zero" className="button zero number">0</button>
                <button id="decimal" className="button operator dot">.</button>
                <button id="equals" className="button operator">
                    =
                </button>
            </div>
        );
    }
}