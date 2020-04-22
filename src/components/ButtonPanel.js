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
                <button className="button clear-all">AC</button>
                <button className="button clear">%</button>
                <button className="button clear">+/-</button>
                <button className="button operator">
                    /
                </button>

                <button className="button number">1</button>
                <button className="button number">2</button>
                <button className="button number">3</button>
                <button className="button operator">
                    x
                </button>

                <button className="button number">4</button>
                <button className="button number">5</button>
                <button className="button number">6</button>
                <button className="button operator">
                    -
                </button>

                <button className="button number">7</button>
                <button className="button number">8</button>
                <button className="button number">9</button>
                <button className="button operator">
                    +
                </button>

                <button className="button zero number">0</button>
                <button className="button operator dot">.</button>
                <button className="button operator">
                    =
                </button>
            </div>
        );
    }
}