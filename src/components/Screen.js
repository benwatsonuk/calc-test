import React from "react";
import "./Screen.scss";

class Screen extends React.Component {
    render() {
        return (
            <div className="screen">
                {this.props.total}
            </div>
        );
    }
}

export default Screen;