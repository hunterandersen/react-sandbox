import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    //This is the ONLY place that you can use an equals sign with state
    this.state = {
      inputTextStr: "",
    };

    //The this keyword
    //Bind the correct version of "this" to the function
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    //Don't re-assign or directly change a state variable
    this.setState({
        inputTextStr: event.target.value
    });
  }

  render() {

    return (
      <form onSubmit={(e) => this.props.handleSubmit(e, this.state.inputTextStr)}>
        <label htmlFor="inputText">Input an Item</label>
        <input
          type="text"
          name="inputText"
          id="inputText"
          value={this.state.inputTextStr}
          onChange={this.handleChange}
        />
        <button type="submit">Add Item</button>
      </form>
    );
  }
}
