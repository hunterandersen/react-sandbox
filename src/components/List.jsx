import React, { Component } from 'react'

export default class List extends Component {

    constructor(props){
        super(props);
    }

  render() {

    //const shoppingList = ["oranges", "bananas", "brussel sprouts", "toast"];

    return (
      <ul>
        {this.props.shoppingList.map((item, index) => {
            //React wants unique keys on listed items to help it track them
            //That way it's DOM manipulation can be efficient
            return <li key={`${item}${index}`}>{item}</li>
        })}
      </ul>
    )
  }
}