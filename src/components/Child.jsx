import { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("I just logged this thing:", this.props);

    return (
      <div>
        <h1>{`Hi, This is React`}</h1>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Child;
