import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.theDate = new Date().toLocaleTimeString();
    }
    handleClick() {
        this.theDate = new Date().toLocaleTimeString();
        console.log(`date: ${this.theDate}`);
        //well my ideas dont work haha
    }
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Hellooooo</h2>

                </div>
                <p className="App-intro" onClick={this.handleClick}>
                    It is {this.theDate}.
                </p>
            </div>
        );
    }
}

export default App;
