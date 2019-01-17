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
            numberToOperateWith: null
        };
    }

    handleClick = (value, type) => {
        //@todo add decimal handler?
        if (type === 'numeric') {
            this.setState({lastButtonType: type})
            if (this.state.lastButtonType === 'numeric') {
                if (this.state.numberToOperateWith !== 0) {
                    this.setState({numberToOperateWith: this.state.numberToOperateWith.toString() + value.toString()})
                } else {
                    this.setState({numberToOperateWith: value})
                }
            } else {
                this.setState({numberToOperateWith: value})
            }
        } else if (type === 'operator' && value === 'equals') {
            this.setState({lastButtonType: null})
            this.setState({operator: null})
            this.setState({total: operations(this.state.total, this.state.numberToOperateWith, this.state.operator)})

        } else {
            this.setState({operator: value})
            if (this.state.lastButtonType === 'numeric') {
                this.setState({total: operations(this.state.total, this.state.numberToOperateWith, this.state.operator)})
            }
            this.setState({lastButtonType: type})
        }
    }

    render() {
        return (
            <div className="App">
                <Screen total={this.state.total}/>
                <Buttons total={this.state.total} onClick={(value, type) => this.handleClick(value, type)} />
            </div>
        );
    }
}

export default App;
