import React from 'react';

const Todo = props => {
  console.log(props)
  return (
    <div
      // className={`item${props.todo.completed ? ' completed' : ''}`}
      onClick={() => props.toggleItem(props.todo.id)}
      style={{
        textDecoration: props.todo.completed && "line-through",
        background: props.todo.completed ? "#3b5998" : "#4e71ba"
      }}
      // completed={props.todo.completed.toString()}
    >
    <p>{props.todo.name}</p>
    </div>
  );
}

export default Todo;
