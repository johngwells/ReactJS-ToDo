import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = {
      todos: []
    }
  }

  toggleItem = id => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  }

  addItem = (itemName) => {
    // add item to list
    const newTodo = {
      name: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
      
    }, () => console.log(newTodo))
  }

  clearItem = () => {
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    });
  }

  render() {
    return (
      <div>
        <TodoForm 
          addItem={this.addItem}
          clearItem={this.clearItem}
        />
        <TodoList 
          todos={this.state.todos}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
