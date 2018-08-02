import React, { Component } from 'react';
import './App.css';
import Removesboxes from './Removal_Boxes/Removal_boxes';

class App extends Component {
  state={ Text : ""}
  handleTextChange = (event) => {
    this.setState({
      Text:event.target.value
      
    });
 }

ChangeHandler = (event) => {
  var currentArray = this.state.Text;
  console.log(currentArray);
   this.setState({
    Text:currentArray
  });
  
  }
  
  render() {
    
    return (
      <div className="App">
      <Removesboxes handleTextChange={this.handleTextChange}  />
      <button className="buttonSubmit" onClick={this.ChangeHandler} > Generate  </button>
      <div>
      {this.state.Text}
      </div>
      </div>
    );
  }
}

export default App;
