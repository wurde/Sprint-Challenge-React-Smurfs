'use strict'

/**
 * Dependencies
 */

const React = require('react')

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
  name: '',
  height: '',
  age: ''
}

/**
 * Export component
 */

module.exports = Smurf
