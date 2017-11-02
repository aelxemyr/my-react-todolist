import types from '../constants/';

export const initialState = {
  todos: [],
  deletions: [],
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
        deletions: state.deletions,
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
      };

    case types.UNDELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          ...state.deletions.slice(-1),
        ],
        deletions: state.deletions.slice(0,-1),
      };

    default:
      return state;
  }
};

export default reducer;
