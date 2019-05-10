'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_router_dom = require('react-router-dom')
const NavLink = react_router_dom.NavLink
const styles = require('./styles/index')

/**
 * Define component
 */

const Navbar = () => {
  return (
    <styles.NavbarStyle>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/smurf-form">Smurf Form</NavLink>
    </styles.NavbarStyle>
  )
}

/**
 * Export component
 */

module.exports = Navbar
