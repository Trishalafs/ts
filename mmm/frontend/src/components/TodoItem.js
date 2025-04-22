import React from 'react';

const TodoItem = ({ todo, onDelete, onToggle }) => (
  <li className="todo-item">
    <div className="left">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo._id)}
      />
      <span className={todo.completed ? 'completed' : ''}>
        {todo.text}
      </span>
    </div>
    <button onClick={() => onDelete(todo._id)}>Delete</button>
  </li>
);

export default TodoItem;
