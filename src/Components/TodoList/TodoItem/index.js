import React from 'react';

import './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const TodoItem = () => {

  return(
    <li className="todo-item">
      <input className="checkbox" type="checkbox" />
      <div className="todo-text">new one</div>
      <FontAwesomeIcon className="remove-button" icon={faTrashAlt} />
    </li>
  )
};

export default TodoItem;
