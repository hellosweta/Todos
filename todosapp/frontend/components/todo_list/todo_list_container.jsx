import { connect } from "react-redux";
import TodoList from './todo_list.jsx';
import {allTodos} from '../../reducers/selectors.js';
import { createTodo, requestTodos, receiveTodos, receiveTodo, removeTodo } from '../../actions/todo_actions.js';

const mapStateToProps = state => ({
  todos: allTodos(state),
  state
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  createTodo: (todo) => dispatch(createTodo(todo)),
  receiveTodos: (todos) => dispatch(receiveTodos(todos)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  requestTodos: () => dispatch(requestTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
