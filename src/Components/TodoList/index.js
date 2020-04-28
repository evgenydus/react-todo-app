import React from 'react'

import './index.css'

import TodoItem from './TodoItem'

const TodoList = ({ onToggle, removeTodo, todos }) => {
  return (
    <div className="todo-container">
      <h2 className="list-title">Todo list</h2>
      <ul className="todo-list">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} onChange={onToggle} removeTodo={removeTodo} todo={todo} />
        })}
      </ul>
    </div>
  )
}

export default TodoList
