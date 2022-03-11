import React from 'react';


class Counterproject extends React.Component {
    constructor() {
        super();
        this.state = {
           counter: 0
        };
        
    };
    onAdd= () => {
        this.setState({ counter: this.state.counter + 1 });
    };
    onDelete= () => {
        this.setState({ counter: this.state.counter - 1 });
    };
    resetAll= () => {
        this.setState({ counter: 0 });
    }
    render() {
        return (
            <>
                <div style={{ textAlign: 'center' }}>
                    <h1>Counterproject</h1>
                    <h2>{this.state.counter}</h2>
                    <button onClick={() => this.onAdd}>onAdd</button>
                    <button onClick={() => this.onDelete}>onDelete</button>
                    <button onClick={() => this.resetAll}>reset</button>

                </div>
            </>
        );
    }
}

export default Counterproject;