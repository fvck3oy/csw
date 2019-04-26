import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import axios from 'axios'
import { getCountries, createCountry, deleteCountry, updateCountry } from './actions'
import { connect } from 'react-redux'
import CountryList from './CountryList'

class App extends Component {
	state = {
		name: '',
		price:''
	}

	componentDidMount() {
		this.props.getCountries()
	}

	handleChange = e => {
		var name = e.target.name,
			value = e.target.value
		this.setState({ [name]: value })
	}

	handleSubmit = e => {
		e.preventDefault()
		const { name  , price } = this.state
		this.props.createCountry({
			name,price
		})
		this.setState({
			name: '',price:''
		})
	}

	handleDelete = id => {
		this.props.deleteCountry(id)
	}

	handleUpdate = (id, name , price) => {
		this.props.updateCountry(id, {
			name , price
		})
	}

	render() {
		const { countries } = this.props
		return (
			<div className="con">
				<h1>CRUD Guitar lists</h1>
				<ul>
					{countries.map((country, index) => {
						return <CountryList key={index} country={country} onDelete={this.handleDelete} onUpdate={this.handleUpdate} />
					})}
				</ul>
			
				<form onSubmit={this.handleSubmit}>
					<input type="text" name="name" placeholder="Name" onChange={this.handleChange} value={this.state.name} />
					<input type="number" name="price" placeholder="Price" onChange={this.handleChange} value={this.state.price} />
				
					<button type="submit">Add</button>
				</form>
			</div>

			/*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>*/
		)
	}
}

const mapStateToProps = ({ countries }) => {
	return {
		countries
	}
}
export default connect(
	mapStateToProps,
	{ getCountries, createCountry, deleteCountry, updateCountry }
)(App)
