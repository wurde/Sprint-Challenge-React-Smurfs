'use strict'

/**
 * Dependencies
 */

const React = require('react')
const axios = require('axios')
const react_router_dom = require('react-router-dom')
const components = require('./components/index')

/**
 * Constants
 */

const Component = React.Component
const BrowserRouter = react_router_dom.BrowserRouter
const Redirect = react_router_dom.Redirect
const Route = react_router_dom.Route
const axios_client = axios.create({ baseURL: 'http://localhost:3333' })
const Smurfs = components.Smurfs
const SmurfForm = components.SmurfForm

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

    this.addSmurf = this.addSmurf.bind(this)
  }

  componentDidMount() {
    axios_client({
      method: 'GET',
      url: '/smurfs'
    }).then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.error(err))
  }

  addSmurf(smurf) {
    axios_client({
      method: 'POST',
      url: '/smurfs',
      data: smurf
    }).then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" render={() =>
          <Redirect to="/smurfs" /> } />

        <Route path="/smurfs" render={(props) =>
          <Smurfs smurfs={this.state.smurfs} /> } />

        <Route path="/smurf-form" render={(props) =>
          <SmurfForm addSmurf={this.addSmurf} /> } />
      </BrowserRouter>
    )
  }
}

/**
 * Export component
 */

module.exports = App
