import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            date: '',
            time: '',
            number: 0
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleClick = e => {
        e.preventDefault()
        const newRes = {
            id: Date.now(),
            name: this.state.name,
            date: this.state.date,
            time: this.state.time,
            number: this.state.number
        }
        this.props.addReservation(newRes)
    }

    render() {
        return (
            <div>
                <input
                    placeholder='Name'
                    autoComplete='off'
                    type='search'
                    name='name'
                    value={this.state.name}
                    onChange={e => this.handleChange(e)}
                />
                <input
                    placeholder='Date(mm/dd)'
                    autoComplete='off'
                    type='search'
                    name='date'
                    value={this.state.date}
                    onChange={e => this.handleChange(e)}
                />
                <input
                    placeholder='Time'
                    autoComplete='off'
                    type='search'
                    name='time'
                    value={this.state.time}
                    onChange={e => this.handleChange(e)}
                />
                <input
                    placeholder='Number of guests'
                    autoComplete='off'
                    type='number'
                    name='number'
                    value={this.state.number}
                    onChange={e => this.handleChange(e)}
                />
                <button onClick={e => this.handleClick(e)}>Make Reservation</button>
            </div>
        )
    }
}

export default Form