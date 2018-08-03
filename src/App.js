import React, { Component } from 'react';
import './App.css';
import Removesboxes from './Removal_Boxes/Removal_boxes';

class App extends Component {
  state={ Text : "",
        charArray:[]}
  handleTextChange = (event) => {
    this.setState({
      Text:event.target.value
      
    });
 }

// ChangeHandler = (event) => {
//   var currentArray = this.state.Text;
//   console.log(currentArray);
//    this.setState({
//     Text:currentArray
//   });
  
//   }


  ChangeHandler = (event) => {
    var currentArray = this.state.Text.split('');
    console.log(currentArray);
     this.setState({
      charArray:currentArray
    })
  };

  RemoveElement = (event) => {
    var currentArray=this.state.Text.split('');
    
    var index = currentArray.indexOf('L');
    if (index > -1) {
    currentArray.splice(index, 1);
    }
    this.setState({
      charArray:currentArray
    })
  }


  
  render() {
    
    return (
      <div className="App">
      <Removesboxes handleTextChange={this.handleTextChange}  />
      <button className="buttonSubmit" onClick={this.ChangeHandler} > Generate  </button>
      <div>
      
      {
        this.state.charArray.map(el => {
         return(
          <p className="el" key={index} onClick={this.RemoveElement.bind(this, index)}>   {el}  <br /></p>
         );
        })
       }
      </div>
      </div>
    );
  }
}

export default App;
