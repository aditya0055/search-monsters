
import React, { Component } from 'react'
import CardList from './card/card-list.component'
import './App.css'
import SearchBar from './search-bar/search-bar.component'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state
    const filterMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
      <h1>Aditya Monster Search</h1>
        <SearchBar placeholder='Aditya Search' handleChange={this.handleChange}/>
        <CardList monsters={filterMonster} />
      </div>
    )
  }
}
