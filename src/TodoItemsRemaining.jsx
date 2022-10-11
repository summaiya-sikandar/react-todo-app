import React from 'react'
import { useContext } from 'react';
import { TodoContext } from './useContext';

function TodoItemsRemaining() {
  const {todos } = useContext(TodoContext);
  function remaining(){
    return todos.filter(todo => !todo.isComplete).length;
  }

  return (
    <span> {remaining()} items remaining</span>
  )
}

export default TodoItemsRemaining