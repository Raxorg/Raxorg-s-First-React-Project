import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  // Most recommended way
  increment2 = () => {
    // Arrow function has access to the "this" keyword
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <div>
        <p>Count value is: {this.state.counter}</p>
        <button onClick={() => this.increment()}>Click</button>
        <button onClick={this.increment}>Click2</button>
        <button onClick={this.increment2}>Click3</button>
      </div>
    );
  }
}
export default Counter;
