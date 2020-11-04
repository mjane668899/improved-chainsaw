import React, {Component} from 'react';

import FlightsForm from './FlightsForm';
import FlightsDisplay from './FlightsDisplay';

class Flights extends Component {
constructor() {
  super();
  this.state = {
    flights: []
    }
  }

  render() {
    return (
      <div>
        <h1>Virgin Airlines</h1>
        <button >Create Flight</button>
        <FlightsForm />
      </div>
    )
  }
}

export default Flights;
