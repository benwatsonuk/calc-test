import React from "react";
import "./Buttons.scss";

class Buttons extends React.Component {

    renderButton = function (value, type) {
        return <button
            className={"calc__button calc__button--" + type}
            onClick={() => this.props.onClick(value, type)}
            >
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
