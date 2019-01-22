import React from "react";
import logo from "./logo.svg";
import "./Screen.scss";

class Screen extends React.Component {
    render() {
        return (
            <div className="screen">
                <div className="screen__branding">
                    <img src={logo} alt="Equal Experts logo" />
                </div>
                <div className="screen__display" aria-live="polite" aria-label="Total visible on calculator" id="screenDisplay">
                    {this.props.total}
                </div>
            </div>
        );
    }
}

export default Screen;