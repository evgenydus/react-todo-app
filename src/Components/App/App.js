import React, { Component } from 'react';

import './App.css';

import AddTodo from '../AddTodo';
import TodoList from '../TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 1, text: 'new todo', isCompleted: false},
        {id: 2, text: 'second todo', isCompleted: false},
      ]
    }
  }

  toggleTodo = (id) => {
    this.setState(
      this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted
        }
        return todo
      })
    )
  }

  render() {
    const { todos } = this.state;

    return (
      <div className="App">
        <AddTodo />
        <TodoList onToggle={this.toggleTodo} todos={todos} />
      </div>
    );
  }
}

export default App;
