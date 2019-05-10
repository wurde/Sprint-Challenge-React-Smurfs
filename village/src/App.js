'use strict'

/**
 * Dependencies
 */

const React = require('react')
const components = require('./components/index')

/**
 * Constants
 */

const Component = React.Component

/**
 * Import component styles
 */

require('./App.scss')

/**
 * Define component
 */

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      smurfs: [],
    }
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <components.SmurfForm />
        <components.Smurfs smurfs={this.state.smurfs} />
      </div>
    )
  }
}

/**
 * Export component
 */

module.exports = App
