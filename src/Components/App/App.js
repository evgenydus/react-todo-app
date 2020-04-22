import React from 'react';

import './App.css';

import AddTodo from '../AddTodo';
import TodoList from '../TodoList';

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}

export default App;
