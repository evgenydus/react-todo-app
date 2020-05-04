import React, { Component } from 'react'

import './index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class AddTodo extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.props.inputValue.trim()) {
      this.props.addTodo(this.props.inputValue)
      this.props.changeInputValue('')
    }
  }

  render() {
    const { inputValue, changeInputValue } = this.props

    return (
      <form className="input-container" onSubmit={this.handleSubmit}>
        <input
          className="input"
          onChange={(event) => {
            changeInputValue(event.target.value)
          }}
          type="text"
          value={inputValue}
        />
        <button className="add-button" type="submit">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
    )
  }
}

export default AddTodo
