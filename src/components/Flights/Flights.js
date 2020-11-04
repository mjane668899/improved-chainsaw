import React, {Component} from 'react';

import FlightsForm from './FlightsForm';
import FlightsDisplay from './FlightsDisplay';

class Flights extends Component {

  render() {
    return (
      <div>
        <h1>Virgin Airlines</h1>
        <input type="button" value="Create Flight" />
        <FlightsForm />
      </div>
    )
  }
}

export default Flights;
