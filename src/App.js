import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./components/Styling.css"

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
const todos = [
  {
    name: "Organize Garage",
    id: 1528817077286,
    done: false,
  },
  {
    name: "Bake Cookies",
    id: 1528817084358,
    done: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos,
    };
  }

  toggleTodo = (todoId) => {
    console.log(todoId);
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todoId === todo.id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      }),
    });
  };

  addTodo = (todo) => {
    const newTodo = {
      name: todo,
      id: Date.now(),
      done: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  clearDone = (e) => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter((item) => !item.done),
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTodo={this.addTodo} />
        </div>

        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          clearDone={this.clearDone}
        />
      </div>
    );
  }
}

export default App;
