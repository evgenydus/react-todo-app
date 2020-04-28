import React from 'react'

import './index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const AddTodo = () => {
  return (
    <div className="input-container">
      <input className="input" type="text" />
      <button className="add-button" type="button">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  )
}

export default AddTodo
