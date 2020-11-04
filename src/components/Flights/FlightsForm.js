import React, {Component} from 'react'

class FlightsForm extends Component {
  constructor() {
    super();
    this.state = { content: ''}
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="flight #" />
          <input type="text" placeholder="date" />
          <input type="text" placeholder="to" />
          <input type="text" placeholder="from" />
          <input type="text" placeholder="plane" />
          <input type="button" value="Cancel" />
          <input type="button" value="Save" />
        </form>
      </div>
    )
  }
}

export default FlightsForm
