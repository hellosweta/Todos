import React from 'react';

const TodoListItem = ({ todo,  children }) => (
    <li>
      {todo.title}
      {children}
    </li>
);

export default TodoListItem;
