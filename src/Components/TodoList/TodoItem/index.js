import React from 'react'

import './index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const TodoItem = ({ onChange, removeTodo, todo }) => {
  const textStyles = ['todo-text']
  if (todo.completed) textStyles.push('done')

  return (
    // TODO: Fix animation on adding todo
    <li className={`todo-item ${todo.completed ? 'slide-bottom' : 'slide-top'}`}>
      <input
        checked={todo.completed}
        className="checkbox"
        onChange={() => onChange(todo.id)}
        type="checkbox"
      />
      <div className={textStyles.join(' ')}>{todo.title}</div>
      <FontAwesomeIcon
        className="remove-button"
        icon={faTrashAlt}
        onClick={() => removeTodo(todo.id)}
      />
    </li>
  )
}

export default TodoItem
