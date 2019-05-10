'use strict'

/**
 * Dependencies
 */

const React = require('react')
const Smurf = require('./Smurf')
const react_router_dom = require('react-router-dom')

/**
 * Constants
 */

const Component = React.Component
const Link = react_router_dom.Link

/**
 * Define component
 */

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>

        <Link to="/smurf-form">Add</Link>

        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

Smurf.defaultProps = {
 smurfs: [],
}

/**
 * Export component
 */

module.exports = Smurfs
