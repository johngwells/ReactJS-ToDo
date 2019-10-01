import React from 'react';

import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = {
      task: '',
      id: '',
      completed: false
    }
  }

  addItem = () => {
    // add item to list
  }

  render() {
    return (
      <div>
        <h2>Never quit!</h2>
        <TodoList />
      </div>
    );
  }
}

export default App;
