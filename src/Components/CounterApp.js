import React, { Component } from 'react'
import '../Components/CounterAppCss.css'


class CounterApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    render() {


        return (
            <div className="counter">
                <h1>React Counter With Class</h1>
                <span className="counter_output">You clicked {this.state.count} times</span>
                <div className="btn_container">
                    <button className="control_btn" onClick={() => this.setState({ count: this.state.count + 1 })}>
                        +
                    </button>
                    <button className="control_btn" onClick={() => this.setState({ count: this.state.count - 1 })}>
                        -
                    </button>
                    <button className="reset" onClick={() => this.setState({ count: this.state.count === 0 })}>
                        Reset
                    </button>
                </div>
            </div>
        )
    }
}

export default CounterApp