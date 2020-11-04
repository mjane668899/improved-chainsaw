import React, { Component } from 'react';
import axios from 'axios';

import SearchFlights from './SearchFlights';
import SearchDisplay from './SearchDisplay';

const SERVER_URL = 'http://localhost:3000/secrets.json';
// const SERVER_URL = 'http://940c7ac29dd5.ngrok.io/flights.json'


class Search extends Component {
  constructor() {
    super();
    this.state = {
      all_flights: [],
      searchOrigin: '',
      searchDestination: ''
    };

    const fetchFlights = () => {
      axios.get(SERVER_URL).then((results) => {
        this.setState({all_flights: results.data});//< could be results.something else
      });
    };

    fetchFlights()

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
