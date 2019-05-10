'use strict'

/**
 * Dependencies
 */

const styled_components = require('styled-components')

/**
 * Constants
 */

const styled = styled_components.default

/**
 * Define style component
 */

let NavbarStyle = styled.div(() => `
  a {
    text-decoration: none;
    color: rgb(76, 94, 228);
    padding: 10px 20px;
    width: 100%;
    text-align: center;
  }

  a:hover {
    background-color: #EEE;
  }

  a:active {
    background-color: #CCC;
  }

  a.active {
    border 2px solid #DDD;
  }
`)

/**
 * Export style component
 */

module.exports = NavbarStyle
