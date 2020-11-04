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
      all_flights: [],
    };


    const fetchFlights = () => {
      axios.get(SERVER_URL).then((results) => {
        console.log( results.data )
        this.setState({all_flights: results.data});

      });
    };

    fetchFlights();

  }



  render() {
    return (
      <div>
        <h2> Crappy Airplane Search </h2>
        <SearchForm />
        <SearchDisplay />
      </div>
    );
  }
}



export default Search;
