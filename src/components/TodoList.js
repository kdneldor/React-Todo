import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todos.map((todo) => (
        <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />
      ))}
      <button className="clear-btn" onClick={props.clearDone}>
        Clear Done
      </button>
    </div>
  );
};

export default TodoList;
