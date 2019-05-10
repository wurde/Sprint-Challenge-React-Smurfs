'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_router_dom = require('react-router-dom')
const NavLink = react_router_dom.NavLink

/**
 * Define component
 */

const Navbar = () => {
  return (
    <div className="Navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/smurf-form">Smurf Form</NavLink>
    </div>
  )
}

/**
 * Export component
 */

module.exports = Navbar
