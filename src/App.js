import React, {Component} from 'react';
import Screen from './components/Screen';
import Buttons from './components/Buttons';
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0
        };
    }

    render() {
        return (
            <div className="App">
                <Screen total={this.state.total}/>
                <Buttons total={this.state.total} />
            </div>
        );
    }
}

export default App;
