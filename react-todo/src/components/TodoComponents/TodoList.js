/*
  - your components will all go in this `component` directory.
  - <TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.
*/
import React from 'react';

const TodoList = props => {
  return (
    <div 
      onClick={() => props.completedItem(props.item)}>
      {props.todos.map((todo, index) => (
        <li key={index}>{todo.name}</li>
      ))}
    </div>
  );
}

export default TodoList;
