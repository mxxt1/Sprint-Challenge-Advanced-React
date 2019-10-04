import React, { Component } from 'react';
import axios from 'axios';
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/players')
    .then(response => {
      console.log(response);
      this.setState({data: response.data})
      //is there a 100 element length limit on arrays?
      console.log(this.state.data)
    })
    .catch(error => {
      console.log(`CDU error: `, error);
    })
  }
  
  
  
  render() {
    return (
      <div className='App'>
        <h1>Soccer Player Tracker</h1>
      </div>
    )
  }
}

export default App

