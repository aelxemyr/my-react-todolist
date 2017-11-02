import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({
  submitTodo,
  undeleteTodo,
  inputChanged,
  addTodoDisabled,
  undeleteDisabled
}) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submitTodo(input.value);
          input.value = '';
        }}
      >
        <input
          className="todo-input"
          ref={(element) => {
            input = element;
          }}
          placeholder="I'm going to do..."
          onChange={() => inputChanged(input.value)}
        />

        <button
          type="submit"
          className="todo-submit"
          disabled={addTodoDisabled}
        >
          Add Todo
        </button>

        <button
          className="todo-undelete"
          onClick={() => undeleteTodo()}
          disabled={undeleteDisabled}
        >
          Undelete
        </button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  undeleteTodo: PropTypes.func.isRequired,
  inputChanged: PropTypes.func.isRequired,
  addTodoDisabled: PropTypes.bool.isRequired,
  undeleteDisabled: PropTypes.bool.isRequired,
};

export default AddTodo;
