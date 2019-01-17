import React, {Component} from 'react';
import Screen from './components/Screen';
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0
        };
    }

    renderButton = function (value, type) {
        return <button
            className={"calc__button calc__button--" + type}>
            {value}
        </button>
    }

    render() {
        return (
            <div className="App">
                <Screen total={this.state.total}/>
                <div className="allButtons">
                    <div className="numericButtons">
                        {this.renderButton('decimal', 'numeric')}
                        {this.renderButton(0, 'numeric')}
                        {this.renderButton(1, 'numeric')}
                        {this.renderButton(2, 'numeric')}
                        {this.renderButton(3, 'numeric')}
                        {this.renderButton(4, 'numeric')}
                        {this.renderButton(5, 'numeric')}
                        {this.renderButton(6, 'numeric')}
                        {this.renderButton(7, 'numeric')}
                        {this.renderButton(8, 'numeric')}
                        {this.renderButton(9, 'numeric')}
                    </div>
                    <div className="operatorButtons">
                        {this.renderButton('plus', 'operator')}
                        {this.renderButton('minus', 'operator')}
                        {this.renderButton('multiply', 'operator')}
                        {this.renderButton('divide', 'operator')}
                        {this.renderButton('equals', 'operator')}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
