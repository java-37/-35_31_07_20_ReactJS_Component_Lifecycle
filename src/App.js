import React from "react";
import "./App.css";
import MyComponent from "./MyComponent";

class App extends React.Component {
  state = {
    isShow:true
  }
  render() {
    return (
      <div className="App">
        <button onClick={() => this.setState({isShow:false})}>Hide</button>
        {this.state.isShow ? <MyComponent /> : null}
        
      </div>
    );
  }
}

export default App;
