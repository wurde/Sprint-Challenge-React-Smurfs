'use strict'

/**
 * Dependencies
 */

const React = require('react')
const PropTypes = require('prop-types')

/**
 * Define component
 */

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  )
}

Smurf.defaultProps = {
  name: PropTypes.string.isRquired,
  height: PropTypes.string.isRquired,
  age: PropTypes.string.isRquired
}

/**
 * Export component
 */

module.exports = Smurf
