import { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("I just logged this thing:", this.props);

    return (
      <div>
        <h2>{`Favorite Color: ${this.props.favColor}`}</h2>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Child;
