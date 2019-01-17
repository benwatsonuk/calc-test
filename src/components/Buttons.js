import React from "react";
import "./Buttons.scss";

class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        } else {
            this.setState({operator: value})
            this.setState({lastButtonType: type})
        }
    }

    renderButton = function (value, type) {
        return <button
            className={"calc__button calc__button--" + type}
            onClick={this.handleClick.bind(this, value, type)}>
            {value}
        </button>
    }

    render() {
        return (
            <div className="buttons">
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
        );
    }
}

export default Buttons;

