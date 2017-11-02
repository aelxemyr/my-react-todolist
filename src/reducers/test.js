/* global expect, it, describe */

import types from '../constants/';
import { reducer, initialState } from '.';

describe('Reducer', () => {
  const todoText = 'A todo';

  it('Should return the initial state when no action passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('Submit todo', () => {
    it('Should return the correct state', () => {
      const startingState = {
        ...initialState,
      };

      const action = {
        type: types.SUBMIT_TODO,
        id: 1,
        text: todoText,
      };

      const expectedState = {
        ...initialState,
        todos: [
          {
            id: 1,
            text: todoText,
          },
        ],
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });

  describe('Delete todo', () => {
    it('Should return the correct state', () => {
      const startingState = {
        ...initialState,
        todos: [
          {
            id: 1,
            text: todoText,
          },
        ],
      };

      const action = {
        type: types.DELETE_TODO,
        id: 1,
      };

      const expectedState = {
        ...initialState,
        deletions: [
          {
            id: 1,
            text: todoText,
          },
        ],
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });

  describe('Undelete todo', () => {
    it('Should return the correct state', () => {
      const startingState = {
        ...initialState,
        deletions: [
          {
            id: 1,
            text: todoText,
          },
        ],
      };

      const action = {
        type: types.UNDELETE_TODO,
        id: 1,
      };

      const expectedState = {
        ...initialState,
        todos: [
          {
            id: 1,
            text: todoText,
          },
        ],
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });
});
