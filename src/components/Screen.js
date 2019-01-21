import React from "react";
import logo from "./logo.svg";
import "./Screen.scss";

class Screen extends React.Component {
    render() {
        return (
            <div className="screen">
                <div className="screen__branding">
                    <img src={logo} />
                </div>
                <div className="screen__display">
                    {this.props.total}
                </div>
            </div>
        );
    }
}

export default Screen;