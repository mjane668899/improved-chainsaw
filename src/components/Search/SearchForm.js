import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all_flight: '',
    };

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event) {
    this.setState( {content: event.target.value})
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit( this.state.content );

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
        <form>
          <input
            onChange={this._handleChange}
            id="origin"
            type="text"
            placeholder="From " />
          <input
            id="destination"
            onChange={this._handleChange}
            type="text"
            placeholder="To " />
          <input
            onClick={this.resetForm}
            type="button"
            value="Cancel" />
          <input
            onSubmit={this.handleSubmit}
            type="button"
            value="Save" />
        </form>
      </div>
    );
  }
}


export default SearchForm;
