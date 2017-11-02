import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todos, deleteTodo, undeleteTodo }) => {
  const todoItems = todos.map(todo => (
    <li key={todo.id}>

      <button
        type="button"
        className="todo-delete"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>

      <span className="todo-text">{todo.text}</span>
    </li>
  ));

  const undeleteButton = (
    <button
      type="button"
      className="todo-undelete"
      onClick={() => undeleteTodo()}
    >
      Undelete
    </button>
  );

  return (
    <div>
      {undeleteButton}
      <ul>
        {todoItems}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  undeleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
