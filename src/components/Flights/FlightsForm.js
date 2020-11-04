import React, {Component} from 'react'

class FlightsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flight: '',
      baseState: ''
    };

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event) {
    console.log('change', event.target.value)
    this.setState( {flight: event.target.value})
  }

  _handleSubmit(event) {
    event.preventDefault();

  }

  resetForm = () => {
    Array.from(document.querySelectorAll('input')).forEach(
      input => (input.value = '')
    );
    this.setState( {
      flightValues: [{}]
    })
  }

  render() {
    return (
      <div>
        <form>
          <input
            onChange={this._handleChange}
            id="flightNumber"
            type="text"
            placeholder="flight #" />
          <input
            id="date"
            onChange={this._handleChange}
            type="text"
            placeholder="date" />
          <input
            id="to"
            onChange={this._handleChange}
            type="text"
            placeholder="to" />
          <input
            id="from"
            onChange={this._handleChange}
            type="text"
            placeholder="from" />
          <input
            id="plane"
            onChange={this._handleChange}
            type="text"
            placeholder="plane" />
          <input
            onClick={this.resetForm}
            type="button"
            value="Cancel" />
          <input
            type="button"
            value="Save" />
        </form>
      </div>
    )
  }
}
export default FlightsForm
