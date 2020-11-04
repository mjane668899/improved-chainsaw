import React, {Component} from 'react'

class FlightsForm extends Component {
  constructor() {
    super();
    this.state = {
      flight: '',
      baseState: ''
    };

    this._handleChange = this._handleChange.bind(this);

    this.baseState = this.state;
  }

  _handleChange(event) {
    console.log('change', event.target.value)
    this.setState( {flight: event.target.value})
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
          <input onChange={this._handleChange} type="text" placeholder="flight #" />
          <input onChange={this._handleChange} type="text" placeholder="date" />
          <input onChange={this._handleChange} type="text" placeholder="to" />
          <input onChange={this._handleChange} type="text" placeholder="from" />
          <input onChange={this._handleChange} type="text" placeholder="plane" />
          <input onClick={this.resetForm} type="button" value="Cancel" />
          <input type="button" value="Save" />
        </form>
      </div>
    )
  }
}
export default FlightsForm
