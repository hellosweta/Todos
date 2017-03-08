import * as APIUtils from "../util/todo_api_util.js";
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodos = todos => ({
    type: RECEIVE_TODOS,
    todos
});
window.receiveTodos = receiveTodos;

export const receiveTodo = todo => ({
    type: RECEIVE_TODO,
    todo
});

export const removeTodo = todo => ({
    type: REMOVE_TODO,
    todo
});

export const requestTodos = () => dispatch => (
  APIUtils.fetchTodos().then(todos => dispatch(receiveTodos(todos)))
);

export const createTodo = (todo) => dispatch => (
  APIUtils.createTodo(todo).then(innerTodo => dispatch(receiveTodo(innerTodo)))
);
