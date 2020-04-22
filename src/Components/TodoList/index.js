import React from 'react';

import './index.css';

import TodoItem from './TodoItem';

const TodoList = () => {

  return(
    <div className="todo-container">
      <h2 className="list-title">Todo list</h2>
      <ul className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  )
};

export default TodoList;
