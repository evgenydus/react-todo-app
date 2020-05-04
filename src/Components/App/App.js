import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './App.css'

import AddTodo from '../AddTodo'
import TodoList from '../TodoList'
import Loader from '../TodoList/Loader'

import { changeInputValue, changeLoading, changeTodos } from '../../Store/actions'

const todoPlaceholderUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=5'

class App extends Component {
  constructor(props) {
    super(props)

    this.toggleTodo = this.toggleTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.addTodo = this.addTodo.bind(this)
  }

  componentDidMount() {
    fetch(todoPlaceholderUrl)
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          this.props.changeTodos(todos)
          this.props.changeLoading(false)
        }, 1000)
      })
  }

  toggleTodo(id) {
    const newTodoList = this.props.todos.map((todo) => {
      if (todo.id !== id) return todo

      return {
        ...todo,
        completed: !todo.completed,
      }
    })

    this.props.changeTodos(newTodoList)
  }

  removeTodo(id) {
    const newTodoList = this.props.todos.filter((todo) => todo.id !== id)
    this.props.changeTodos(newTodoList)
  }

  addTodo(text) {
    const newTodo = {
      id: this.props.todos.length + 1,
      title: text,
      completed: false,
    }
    const newTodoList = [newTodo, ...this.props.todos]

    this.props.changeTodos(newTodoList)
  }

  render() {
    const { todos, isLoading, inputValue, changeInputValue } = this.props

    return (
      <div className="App">
        <AddTodo
          addTodo={this.addTodo}
          changeInputValue={changeInputValue}
          inputValue={inputValue}
        />
        {isLoading ? (
          <Loader />
        ) : (
          <TodoList onToggle={this.toggleTodo} removeTodo={this.removeTodo} todos={todos} />
        )}
      </div>
    )
  }
}

const putStateToProps = (state) => {
  return {
    todos: state.todos,
    isLoading: state.isLoading,
    inputValue: state.inputValue,
  }
}

const putActionsToProps = (dispatch) => {
  return {
    changeInputValue: bindActionCreators(changeInputValue, dispatch),
    changeLoading: bindActionCreators(changeLoading, dispatch),
    changeTodos: bindActionCreators(changeTodos, dispatch),
  }
}

export default connect(putStateToProps, putActionsToProps)(App)
