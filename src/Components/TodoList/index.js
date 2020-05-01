import React from 'react'

import './index.css'

import TodoItem from './TodoItem'

const noTodoText = 'You have nothing to do!'

const TodoList = ({ onToggle, removeTodo, todos }) => {
  return todos.length ? (
    <div className="todo-container">
      <h2 className="list-title">Todo list:</h2>
      <ul className="todo-list">
        {todos.map((todo) => {
          if (!todo.completed) {
            return (
              <TodoItem key={todo.id} onChange={onToggle} removeTodo={removeTodo} todo={todo} />
            )
          }
        })}
      </ul>
      <h2 className="list-title">Completed:</h2>
      <ul className="todo-list">
        {todos.map((todo) => {
          if (todo.completed) {
            return (
              <TodoItem key={todo.id} onChange={onToggle} removeTodo={removeTodo} todo={todo} />
            )
          }
        })}
      </ul>
    </div>
  ) : (
    <p className="no-todo-text">{noTodoText}</p>
  )
}

export default TodoList
