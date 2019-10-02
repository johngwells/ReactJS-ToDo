/*
  - your components will all go in this `component` directory.
  - <TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.
*/
import React from 'react';

import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.todos.map((todo, index) => (
        <Todo key={index} todo={todo} toggleItem={props.toggleItem}/>
      ))}
    </div>
  );
}

export default TodoList;
