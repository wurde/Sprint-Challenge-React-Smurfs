'use strict'

/**
 * Dependencies
 */

const React = require('react')

/**
 * Define component
 */

function Smurf(props) {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <span onClick={() => props.removeSmurf(props.id) }>x</span>
    </div>
  )
}

/**
 * Export component
 */

module.exports = Smurf
