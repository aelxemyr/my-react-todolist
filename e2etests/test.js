/* global describe, it, browser */

const expect = require('chai').expect;

describe('TodoList App', () => {

  const todoText = 'Get better at testing';

  const createTodo = () => {
    browser.url('http://localhost:3000/');
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');
  };

  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('Todo List');
  });

  it('Should allow me to create a Todo', () => {
    createTodo();
    const actual = browser.element('.todo-text').getText();

    expect(actual).to.equal(todoText);
  });

  it('Should allow me to delete a Todo', () => {
    createTodo();
    browser.click('.todo-delete');
    const actual = browser.element('.todo-text');

    expect(actual.state).to.equal('failure');
  });

  it('Should allow me to undelete a Todo', () => {
    createTodo();
    browser.click('.todo-delete');
    browser.click('.todo-undelete');
    const actual = browser.element('.todo-text').getText();

    expect(actual).to.equal(todoText);
  });
});
