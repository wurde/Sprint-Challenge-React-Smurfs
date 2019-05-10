'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_router_dom = require('react-router-dom')
const styles = require('./styles/index')

/**
 * Constants
 */

const Component = React.Component
const Link = react_router_dom.Link

/**
 * Define component
 */

class SmurfForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }

  addSmurf = event => {
    event.preventDefault()

    this.props.addSmurf({
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    })

    this.setState({
      name: '',
      age: '',
      height: ''
    })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <styles.SmurfFormStyle>
        <Link to="/">Back</Link>

        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </styles.SmurfFormStyle>
    )
  }
}

/**
 * Export component
 */

module.exports = SmurfForm
