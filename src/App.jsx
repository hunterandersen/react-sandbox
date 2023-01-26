import { Component } from "react";
import Child from "./components/Child.jsx";
import "./App.css";

class App extends Component {

  render() {

    return (
      <div className="App">
        <Child 
          text={"Hi There"}
          favColor={"yellow"} 
        />
        <Child 
          text={"Hello!"}
          favColor={"red"} 
        />
        <Child 
          text={"I hate you!"}
          favColor={"blue"} 
        />
      </div>
    );
  }
}

export default App;
