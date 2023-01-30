import React, { Component } from "react";
import TreeBranch from "./components/TreeBranch";
import "./treeTrunkStyle.css";

export default class TreeTrunk extends Component {
  constructor(props) {
    super(props);

    this.state = {
      superheroList: [],
    };

    this.controller = new AbortController();
  }

  //Second Lifecycle Method
  componentDidMount() {
    //Go fetch the data from the API
    fetch(`https://akabab.github.io/superhero-api/api/all.json`, {
      signal: this.controller.signal,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //How do I change my superheroList?
        this.setState({
          superheroList: data,
        });
      })
      .catch((err) => console.error(err));
  }

  //Fourth Lifecycle Method
  componentWillUnmount() {
    //Perform clean-up operations
    //This is terminating the fetch request before it finishes
    this.controller.abort();
    //We'll come back to this
  }

  //First Lifecycle Method
  render() {
    return (
      <div>
        <h1>Superheros</h1>
        {this.state.superheroList.map((heroObject) => {
          const { id, slug } = heroObject;
          return <TreeBranch
            hero={heroObject}
            key={`${id}-${slug}`}
          />;
        })}
      </div>
    );
  }
}
