import React, { Component } from 'react';
import Pokemon from './warmup.js';
import axios from 'axios';

class App extends Component {

  constructor () {
    super()
    this.state = {
      loading: true,
      pokemon: [],
      showing: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount () {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(res => {
        this.setState({
          pokemon: res.data.results,
          loading: false
        })
      })
  }

  handleChange = () => {
    this.setState({
      showing: !this.state.showing
    })
  }

  render() {

    if (this.state.loading) {
      return <>Loading </>
    }
    return (
      <div className="App">
        <button onClick={this.handleChange}>{this.state.showing ? 'Hidden Pokemons' : 'Show Pokemons'}</button><br /><br />
        { this.state.showing ? <Pokemon pokemon={this.state.pokemon} /> : null }
            
      </div>
    );
  }
}

export default App;
