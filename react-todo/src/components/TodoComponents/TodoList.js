/*
  - your components will all go in this `component` directory.
  - <TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.
*/
import React from 'react';

import Todo from './Todo';

const TodoList = props => {
  return (
    <div>      
      <Todo />
    </div>
  );
}

export default TodoList;
