import React, { Component } from 'react'

import './index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    this.setState({ inputValue: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.state.inputValue.trim()) {
      this.props.addTodo(this.state.inputValue)
      this.setState({ inputValue: '' })
    }
  }

  render() {
    return (
      <form className="input-container" onSubmit={this.handleSubmit}>
        <input
          className="input"
          onChange={(event) => this.handleInputChange(event)}
          type="text"
          value={this.state.inputValue}
        />
        <button className="add-button" type="submit">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
    )
  }
}

export default AddTodo
