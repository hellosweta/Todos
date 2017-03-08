import React from 'react';
import TodoListItem from './todo_list_item.jsx';
import { TodoForm } from './todo_form.jsx';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.receiveTodo = props.receiveTodo;
    this.requestTodos = props.requestTodos;
    this.removeTodo = props.removeTodo;
    this.updateTodo = this.updateTodo.bind(this);
  }

  updateTodo(todo) {
    todo.done = !todo.done;
    this.receiveTodo(todo);
  }

  componentDidMount(){
    this.requestTodos();
  }

  render() {
    return (
    <div>
      <ul>
        {
          Object.keys(this.props.todos).map((key) => (
            <TodoListItem key={key} todo={this.props.todos[key]}>
              <button className="delete-button" onClick={this.removeTodo.bind(null, this.props.todos[key])}>
                Delete Todo
              </button>
              <button className="done-button" onClick={this.updateTodo.bind(null,this.props.todos[key])}>
                {this.props.todos[key].done.toString() === "false" ? `Done` : `Undo`}
              </button>
            </TodoListItem>
          ))
        }
      </ul>
      <TodoForm createTodo={ this.props.createTodo } receiveTodo={ this.receiveTodo }/>
    </div>
    );
  }
}

export default TodoList;
