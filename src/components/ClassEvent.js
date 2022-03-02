import { Component } from "react";

class ClassEvent extends Component {
  handleClick() {
    console.log("CLICKED");
  }
  render() {
    return (
      <div>
        This is class based event handling
        <button onClick={this.handleClick}>Press me</button>
      </div>
    );
  }
}
export default ClassEvent;
