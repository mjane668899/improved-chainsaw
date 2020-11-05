import React, { Component } from 'react';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      origin: '',
      destination: ''
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleOrigin = this._handleOrigin.bind(this);
    this._handleDestination = this._handleDestination.bind(this);
  }

  _handleSubmit(event) {
    event.preventDefault();
    console.log('about to search for', this.state.origin);
    this.props.onSubmit( this.state.origin, this.state.destination );

    // this.setState({
    //   origin: '',
    //   destination: ''}
    // );
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
      origin: '',
      destination: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
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
          <button
            type="submit"
            value="Save" >Submit
            </button>
        </form>
      </div>
    );
  }
}


export default SearchForm;
