import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
class App extends Component {
  
  state = {
    input: '',
  }

  changeInputHandler = (e) => {
    this.setState({
        input:e.target.value,
      });
  }
  
  deleteCharHandler = (i) => {
    let charArr = this.state.input.split('');
    charArr.splice(i,1)
    console.log(i);
     this.setState({
       input: charArr.join("")
     }) 
  }

  render(){
      
      const charArr = this.state.input.split('');
      const charsList = charArr.map((c,i)=> { 
        return <CharComponent 
                key = {i}
                char = {c}
                deleteCharHandler = {this.deleteCharHandler.bind(this, i)} />
      });
      return (
      <div className="App">
        <UserInput changeInputHandler = {this.changeInputHandler} input = {this.state.input}/>
        <ValidationComponent input = {this.state.input} />
        {charsList}
      </div>
    );
  }
}

export default App;
