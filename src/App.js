import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodo from './components/addTodo/';
import TodoList from './components/todoList/';
import actions from './actions/';

export const App = ({
  submitTodo,
  todos,
  deleteTodo,
  undeleteTodo,
  inputChanged,
  addTodoDisabled,
  undeleteDisabled,
}) => (
  <div>
    <h1>Todo list</h1>
    <AddTodo
      submitTodo={submitTodo}
      undeleteTodo={undeleteTodo}
      inputChanged={inputChanged}
      addTodoDisabled={addTodoDisabled}
      undeleteDisabled={undeleteDisabled}
    />
    <TodoList todos={todos} deleteTodo={deleteTodo} />
  </div>
);

App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  undeleteTodo: PropTypes.func.isRequired,
  inputChanged: PropTypes.func.isRequired,
  addTodoDisabled: PropTypes.bool.isRequired,
  undeleteDisabled: PropTypes.bool.isRequired,
};

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
  submitTodo: (text) => {
    if (text) {
      dispatch(actions.submitTodo(text));
    }
  },
  deleteTodo: (id) => {
    dispatch(actions.deleteTodo(id));
  },
  undeleteTodo: () => {
    dispatch(actions.undeleteTodo());
  },
  inputChanged: (text) => {
    dispatch(actions.inputChanged(text));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
