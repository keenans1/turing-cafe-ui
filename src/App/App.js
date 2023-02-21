import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  getReservations = () => {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(data => this.setState({ reservations: data }))
      .catch(err => console.log('get error', err))
  }

  componentDidMount = () => {
    this.getReservations()
  }

  addReservation = newRes => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      body: JSON.stringify(newRes),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => this.getReservations())
      .catch(err => console.log('post err', err))
  }

  render() {
    const cards = this.state.reservations.map(reservation => {
      return (<div className='resy-container' key={reservation.id} id={reservation.id}>
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
          <Form addReservation={this.addReservation} />
        </div>
        {cards}
      </div>
    )
  }
}

export default App;