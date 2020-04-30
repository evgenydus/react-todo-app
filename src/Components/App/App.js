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
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id !== id) return todo

        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        }
      }),
    }))
  }

  removeTodo(id) {
    this.setState((prevState) => {
      return { todos: prevState.todos.filter((todo) => todo.id !== id) }
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
