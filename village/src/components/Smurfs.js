'use strict'

/**
 * Dependencies
 */

const React = require('react')
const Smurf = require('./Smurf')
const PropTypes = require('prop-types')
const react_router_dom = require('react-router-dom')
const styles = require('./styles/index')
const Navbar = require('./Navbar')

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
      <styles.SmurfsStyle>
        <Navbar />

        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Smurf Village</h1>

              <Link to="/smurf-form">Add</Link>

              <hr/>

              <ul>
                {this.props.smurfs.map(smurf => {
                  return (
                    <Smurf
                      name={smurf.name}
                      id={smurf.id}
                      age={smurf.age}
                      height={smurf.height}
                      key={smurf.id}
                      removeSmurf={this.props.removeSmurf}
                      updateSmurf={this.props.updateSmurf}
                    />
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </styles.SmurfsStyle>
    )
  }
}

Smurfs.propTypes = {
  smurfs: PropTypes.array.isRequired,
}

/**
 * Export component
 */

module.exports = Smurfs
