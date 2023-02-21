import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(data => this.setState({ reservations: data }))
  }

  render() {

    const cards = this.state.reservations.map(reservation => {
      return (<div className='resy-container'>
        <h2>{reservation.name}</h2>
        <h3>{reservation.date}</h3>
        <h3>{reservation.time}</h3>
        <h3>Number of guests: {reservation.number}</h3>
      </div>
      )
    })


    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        {cards}
        {/* <div className='resy-container'>

        </div> */}
      </div>
    )
  }
}

export default App;