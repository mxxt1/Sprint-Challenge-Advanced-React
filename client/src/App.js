import React, { Component } from 'react';
import PlayerCard from './components/PlayerCard';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import axios from 'axios';
import './App.css';

const CardContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
  width:80%;
  margin: 0 auto;
  align-items: center;
  justify-content: center
`;

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
        <Navbar />
        <h1>Soccer Player Tracker</h1>
        <CardContainer>
          {this.state.data.map(player => (
            <PlayerCard key={player.id} data={player}/>  
          ))}
          </CardContainer>
      </div>
    )
  }
}

export default App

// response.data.name
// response.data.id
// response.data.country
// response.data.searches