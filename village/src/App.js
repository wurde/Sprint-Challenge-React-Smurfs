'use strict'

/**
 * Dependencies
 */

const React = require('react')
const axios = require('axios')
const components = require('./components/index')

/**
 * Constants
 */

const Component = React.Component
const axios_client = axios.create({ baseURL: 'http://localhost:3333' })

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

  componentDidMount() {
    axios_client({
      method: 'GET',
      url: '/smurfs'
    }).then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.error(err))
  }

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
