import React, { Component } from 'react'

import './App.css'

import AddTodo from '../AddTodo'
import TodoList from '../TodoList'
import Loader from '../TodoList/Loader'

const todoPlaceholderUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=5'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      isLoading: true,
    }

    this.toggleTodo = this.toggleTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.addTodo = this.addTodo.bind(this)
  }

  componentDidMount() {
    fetch(todoPlaceholderUrl)
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          this.setState({ todos, isLoading: false })
        }, 2000)
      })
  }

  toggleTodo(id) {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id !== id) return todo

        return {
          ...todo,
          completed: !todo.completed,
        }
      }),
    }))
  }

  removeTodo(id) {
    this.setState((prevState) => {
      return { todos: prevState.todos.filter((todo) => todo.id !== id) }
    })
  }

  addTodo(text) {
    this.setState((prevState) => {
      const newId = Date.now().toString()
      const newTodo = {
        id: newId,
        title: text,
        completed: false,
      }

      return { todos: [newTodo, ...prevState.todos] }
    })
  }

  render() {
    const { todos, isLoading } = this.state

    return (
      <div className="App">
        <AddTodo addTodo={this.addTodo} />
        {isLoading ? (
          <Loader />
        ) : (
          <TodoList onToggle={this.toggleTodo} removeTodo={this.removeTodo} todos={todos} />
        )}
      </div>
    )
  }
}

export default App
