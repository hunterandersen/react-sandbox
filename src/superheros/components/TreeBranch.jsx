import React, { Component } from "react";

export default class TreeBranch extends Component {

  render() {
    const {name} = this.props.hero;
    return (
      <div className="superheroContainer">
        <a href={`${this.props.hero.images.md}`}>{name}</a>
        <p>Speed: {this.props.hero.powerstats.speed}</p>
      </div>
    );
  }
}
