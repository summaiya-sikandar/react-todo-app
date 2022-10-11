import React, { useContext } from 'react'
import { TodoContext } from './useContext';

function TodoCompletedAll() {
  const {todos ,setTodos } = useContext(TodoContext);

  function completedAll() {
    const updatedTodos =  todos.map(todo => {
        todo.isComplete= !todo.isComplete;
        
      return todo;
    }) 
    setTodos(updatedTodos) 
  }

  return (
    <div>
    <div  onClick={completedAll}
    className="button">Check All</div>
  </div>
  )
}

export default TodoCompletedAll