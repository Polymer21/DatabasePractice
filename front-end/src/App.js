import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    toys: []
  }

  getData = async (path) => {
    const url = `http://localhost:3001${path}`
    const response = await fetch(url)
    const data = await response.json

    return data
  }

  displayToys = (toys) => {
    const toyElements = []
    for (const toy of toys) {
      toyElements.push(
        <div>
        <h1>{toy.make}</h1>
        <h2>{toy.model}</h2>
        <h2>{toy.year}</h2>
        </div>)
    }
    return toyElements
  }

  async componentDidMount() {
    const toysResponse = await this.getData("/toys")
    console.log("ServerData:", toysResponse);
    this.setState({ toys: toysResponse.toys })
  }



  render() {
    return (
      <div className="App">
        {this.displayToys(this.state.toys)}
      </div>
    );
  }
}

export default App;
