/* global expect, it, describe, jest, beforeEach */

import React from 'react';
import { shallow, mount } from 'enzyme';
import AddTodo from '.';

describe('AddTodo component', () => {
  let component;
  let mountedComponent;
  const submitMock = jest.fn();
  const undeleteMock = jest.fn();
  const inputChangeMock = jest.fn();

  beforeEach(() => {
    component = shallow(
      <AddTodo
        submitTodo={submitMock}
        undeleteTodo={undeleteMock}
        inputChanged={inputChangeMock}
        addTodoDisabled
        undeleteDisabled
      />,
    );

    mountedComponent = mount(
      <AddTodo
        submitTodo={submitMock}
        undeleteTodo={undeleteMock}
        inputChanged={inputChangeMock}
        addTodoDisabled
        undeleteDisabled={false}
      />,
    );
  });

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should have one input', () => {
    expect(component.find('.todo-input').length).toEqual(1);
  });

  describe('Add todo button', () => {
    it('Should exist', () => {
      expect(component.find('.todo-submit').length).toEqual(1);
    });

    it('Should call the submitTodo function when clicked', () => {
      expect(submitMock.mock.calls.length).toEqual(0);
      mountedComponent.find('form').simulate('submit');
      expect(submitMock.mock.calls.length).toEqual(1);
    });

    it('Should be disabled when there is no input text', () => {
      const disabled = component.find('.todo-submit').html().includes('disabled=""');

      expect(disabled).toEqual(true);
    });

    it('Should be enabled when there is input text', () => {
      component = shallow(
        <AddTodo
          submitTodo={submitMock}
          undeleteTodo={undeleteMock}
          inputChanged={inputChangeMock}
          addTodoDisabled={false}
          undeleteDisabled
        />,
      );
      const disabled = component.find('.todo-submit').html().includes('disabled=""');

      expect(disabled).toEqual(false);
    });
  });

  describe('Undelete button', () => {
    it('Should exist', () => {
      expect(component.find('.todo-undelete').length).toEqual(1);
    });

    it('Should call the undeleteTodo function when clicked', () => {
      expect(undeleteMock.mock.calls.length).toEqual(0);
      mountedComponent.find('.todo-undelete').simulate('click');
      expect(undeleteMock.mock.calls.length).toEqual(1);
    });

    it('Should be disabled when no deletions exist', () => {
      const disabled = component.find('.todo-undelete').html().includes('disabled=""');

      expect(disabled).toEqual(true);
    });

    it('Should be enabled when deletions exist', () => {
      component = shallow(
        <AddTodo
          submitTodo={submitMock}
          undeleteTodo={undeleteMock}
          inputChanged={inputChangeMock}
          addTodoDisabled
          undeleteDisabled={false}
        />,
      );
      const disabled = component.find('.todo-undelete').html().includes('disabled=""');

      expect(disabled).toEqual(false);
    })
  });
});
