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
      <div className="container">
        <div className="row">
          <div className="col-6 d-flex justify-content-center align-items-center p-4">
            <NavLink to="/smurfs">Smurf List</NavLink>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center p-4">
            <NavLink to="/smurf-form">Smurf Form</NavLink>
          </div>
        </div>
      </div>
    </styles.NavbarStyle>
  )
}

/**
 * Export component
 */

module.exports = Navbar
