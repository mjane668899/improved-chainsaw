import React, { Component } from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';
import SearchDisplay from './SearchDisplay';
import './search.css'

const SERVER_URL = 'http://localhost:3000/flights.json';
// const SERVER_URL = 'http://940c7ac29dd5.ngrok.io/flights.json'

class Search extends Component {
  constructor() {
    super();
    this.state = {
      date: '',
      flight: '',
      origin: '',
      destination: '',
      plane: ''
    };
    this.saveFlight = this.saveFlight.bind(this)

  //   const fetchFlights = () => {
  //     axios.get(SERVER_URL).then((results) => {
  //       console.log( results.data )
  //       this.setState({all_flights: results.data});
  //     });
  //   };
  //
  //   fetchFlights();
  }

  saveFlight(origin, destination) {
    console.log('hello')
    axios.get(SERVER_URL, {origin: origin, destination: destination}).then((results) => {
      

      // for (let i = 0; i < results.data.length; i++) {
      //   if (results.data[i].origin === origin && results.data[i].destination === destination)  {
      //     console.log(results.data[i])
      // }

      }
       // console.log(results.data[2].origin);
       // console.log(origin);
       // this.setState(results.data);
     });
}


  render() {
    return (
      <div>
        <h2> Crappy Airplane Search </h2>
        <button >Search Flight</button>
        <SearchForm onSubmit={this.saveFlight}/>
        <SearchDisplay />
      </div>
    );
  }
}



export default Search;
