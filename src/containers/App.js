import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			persons: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		const allPersons = [];
		for(var i=1; i < 10; i++){
			fetch(`https://swapi.co/api/people/?page=${i}`)
				.then(response => response.json())
				.then(chars => {
					chars.results.map(char => {
						allPersons.push(char);
						return this.setState({ persons: allPersons });
					})
				});
		}
		// fetch(`https://swapi.co/api/people/`)
		// 	.then(response => response.json())
		// 	.then(chars => this.setState({ persons: chars.results }));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	render(){
		const { persons, searchfield } = this.state;
		const filteredPersons = persons.filter(person => {
			return person.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return (persons.length < 80) ?
			(
				<div>
					<h1 className='title'>Star Wars Persons</h1>
					<h1 className='load'>Loading ...</h1>
				</div>
			) :
			(
				<div>
					<h1 className='title'>Star Wars Persons</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<CardList persons={filteredPersons} />
				</div>
			);
	}
}

export default App;