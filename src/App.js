import React, {Component} from 'react';
import Screen from './components/Screen';
import Buttons from './components/Buttons';
import operations from './logic/operations'
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            lastButtonType: null,
            operator: null,
            operatorPrevious: null,
            numberToOperateWith: null
        };
    }

    clearAll = () => {
        this.setState({
            total: 0,
            lastButtonType: null,
            operator: null,
            operatorPrevious: null,
            numberToOperateWith: null
        });
    };

    handleClick = (value, type) => {
        if (type === 'numeric') {
            if (this.state.operator === null) {
                if (this.state.numberToOperateWith !== null) {
                    this.setState({total: this.state.numberToOperateWith.toString() + value.toString()})
                } else {
                    this.setState({total: value.toString()})
                }
            }
            if (this.state.lastButtonType === 'numeric') {
                if (this.state.numberToOperateWith !== 0) {
                    this.setState({numberToOperateWith: this.state.numberToOperateWith.toString() + value.toString()})
                } else {
                    this.setState({numberToOperateWith: value.toString()})
                }
            } else {
                this.setState({numberToOperateWith: value})
            }
            this.setState({lastButtonType: type});
        } else if (type === 'operator') {
            let operatorPrev;
            if (this.state.operatorPrevious === null) {
                operatorPrev = this.state.operator
            } else if (value === 'equals') {
                operatorPrev = this.state.operatorPrevious
            } else this.setState({
                operator: value,
                operatorPrevious: operatorPrev
            });
            this.setState({lastButtonType: type});

            if (value === 'equals') {
                // if (this.state.operatorPrevious !== null) {
                // (operatorPrev === 'equals') ? operatorPrev = this.state.operatorPrevious;
                    this.setState({
                        total: operations(this.state.total, this.state.numberToOperateWith, this.state.operator),
                        operatorPrevious: operatorPrev
                    })
                // }
            } else if (value === 'cancel') {
                this.clearAll()
            } else {
                this.setState({operator: value});
                this.setState({lastButtonType: type});
                if (this.state.numberToOperateWith !== null && this.state.operator !== null && this.state.lastButtonType !== 'operator') {
                    this.setState({total: operations(this.state.total, this.state.numberToOperateWith, this.state.operator)});
                    // this.setState({numberToOperateWith: null})
                }
            }
        }
    };

    render() {
        return (
            <div className="App">
                <Screen total={this.state.total}/>
                <Buttons total={this.state.total} onClick={(value, type) => this.handleClick(value, type)}/>
            </div>
        );
    };
}

export default App;