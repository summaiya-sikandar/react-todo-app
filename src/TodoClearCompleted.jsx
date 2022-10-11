import React, { useContext } from 'react'
import { TodoContext } from './useContext';

function TodoClearCompleted() {
  const {todos ,setTodos } = useContext(TodoContext);
  function clearCompleted() {
    return setTodos([...todos].filter(todo=> !todo.isComplete));
 }

  return (
    <button  onClick={() => clearCompleted()}
    className="button">Clear completed</button>
  )
}

export default TodoClearCompleted