import { Component } from "react";

class Comp extends Component {
  render() {
    const { prop } = this.props;
    return <p>Class component reporting with prop {prop}</p>;
  }
}
export default Comp;
