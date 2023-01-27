import { Component } from "react";
import Form from './components/Form.jsx';
import List from './components/List.jsx';
import "./App.css";

class App extends Component {

  constructor(props){
    super(props);

    //Initialize State
    this.state = {
      shoppingList: []
    }

    //Bind the correct version of "this" to the function
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event, newListItem){
    //Always prevent the default submit event's action from happening
    event.preventDefault();

    this.setState({
      shoppingList: [...this.state.shoppingList, newListItem]
    })
  }

  render() {

    return (
      <div className="App">
        <h1>Shopping List</h1>
        <Form handleSubmit={this.handleSubmit}/>
        <List shoppingList={this.state.shoppingList}/>
      </div>
    );
  }
}

export default App;
