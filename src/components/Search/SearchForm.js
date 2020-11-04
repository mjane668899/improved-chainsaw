import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all_flight: '',
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleOrigin = this._handleOrigin.bind(this);
    this._handleDestination = this._handleDestination.bind(this);
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit( this.state.content );
  }

  _handleOrigin(event) {
    event.preventDefault();
    this.setState( {origin: event.target.value})
    }

  _handleDestination(event) {
    event.preventDefault();
    this.setState( {destination: event.target.value} );
  }

  resetForm = () => {
    Array.from(document.querySelectorAll('input')).forEach(
      input => (input.value = '')
    );
    this.setState( {
      all_flight_values: [{}]
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this._handleOrigin}
            id="origin"
            type="text"
            placeholder="Origin " />
          <input
            id="destination"
            onChange={this._handleDestination}
            type="text"
            placeholder="Destination " />
          <input
            onClick={this.resetForm}
            type="button"
            value="Cancel" />
          <input
            type="button"
            value="Save" />
        </form>
      </div>
    );
  }
}


export default SearchForm;
