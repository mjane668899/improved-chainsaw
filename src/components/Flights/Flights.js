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
        <input type="submit" value="Create Flight" />
        <FlightsForm />
      </div>
    )
  }
}

export default Flights;
