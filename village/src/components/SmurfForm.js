'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_router_dom = require('react-router-dom')
const styles = require('./styles/index')
const Navbar = require('./Navbar')

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
        <Navbar />

        <div className="container">
          <div className="row">
            <div className="col-12">
              <Link to="/">Back</Link>
              <hr/>

              <form onSubmit={this.addSmurf}>
                <div className="form-group">
                  <input
                    onChange={this.handleInputChange}
                    placeholder="name"
                    value={this.state.name}
                    name="name"
                    className="form-control"
                    autoFocus
                  />
                </div>
                <div className="form-group">
                  <input
                    onChange={this.handleInputChange}
                    placeholder="age"
                    value={this.state.age}
                    name="age"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    onChange={this.handleInputChange}
                    placeholder="height"
                    value={this.state.height}
                    name="height"
                    className="form-control"
                  />
                </div>

                <button type="submit" className="btn btn-primary">Add to the village</button>
              </form>
            </div>
          </div>
        </div>
      </styles.SmurfFormStyle>
    )
  }
}

/**
 * Export component
 */

module.exports = SmurfForm
