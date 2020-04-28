import React from 'react'

import './index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const TodoItem = ({ onChange, removeTodo, todo }) => {
  const textStyles = ['todo-text']
  if (todo.isCompleted) textStyles.push('done')

  return (
    <li className="todo-item">
      <input
        checked={todo.isCompleted}
        className="checkbox"
        onChange={() => onChange(todo.id)}
        type="checkbox"
      />
      <div className={textStyles.join(' ')}>{todo.text}</div>
      <FontAwesomeIcon
        className="remove-button"
        icon={faTrashAlt}
        onClick={() => removeTodo(todo.id)}
      />
    </li>
  )
}

export default TodoItem
