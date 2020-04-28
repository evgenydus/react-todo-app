import React, { Component } from 'react'

import './App.css'

import AddTodo from '../AddTodo'
import TodoList from '../TodoList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        { id: 1, text: 'new todo', isCompleted: false },
        { id: 2, text: 'second todo', isCompleted: false },
      ],
    }

    this.toggleTodo = this.toggleTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }

  toggleTodo(id) {
    this.setState(
      // eslint-disable-next-line react/destructuring-assignment,react/no-access-state-in-setstate
      this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted
        }
        return todo
      }),
    )
  }

  removeTodo(id) {
    this.setState((prevState) => {
      return (prevState.todos = prevState.todos.filter((todo) => todo.id !== id))
    })
  }

  render() {
    const { todos } = this.state

    return (
      <div className="App">
        <AddTodo />
        <TodoList onToggle={this.toggleTodo} removeTodo={this.removeTodo} todos={todos} />
      </div>
    )
  }
}

export default App
