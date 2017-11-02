import types from '../constants/';

export const initialState = {
  todos: [],
  deletions: [],
  addTodoDisabled: true,
  undeleteDisabled: true,
};

export const reducer = (state = initialState, action) => {

  switch (action.type) {

    case types.SUBMIT_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
          },
        ],
        addTodoDisabled: true,
      };

    case types.DELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.filter(todo => (
            todo.id !== action.id
          )),
        ],
        deletions: [
          ...state.deletions,
          state.todos.find(todo => (
            todo.id === action.id
          )),
        ],
        undeleteDisabled: false,
      };

    case types.UNDELETE_TODO:
      const deletions = state.deletions.slice(0, -1);
      return {
        ...state,
        todos: [
          ...state.todos,
          ...state.deletions.slice(-1),
        ],
        deletions,
        undeleteDisabled: deletions.length === 0,
      };

    case types.INPUT_CHANGED:
      return {
        ...state,
        addTodoDisabled: action.text === '',
      };

    default:
      return state;
  }
};

export default reducer;
