import React from "react";
//@todo return function button?
function Button(props, value, type) {
    return (
        <button
            className={"calc__button calc__button--" + type}
            onClick={this.handleClick.bind(this, value, type)}>
            {value}
        </button>
    )
}

export default Button;
