
import './index.css';
import './App.css';
import TodoForm from './todoForm';
import NoTodo from './noTodos';
import TodoList from './todoList';
import useLocalStorage from './useLocalStorage';
import { TodoContext } from './useContext';
import { useState } from 'react';



function App() {

  const [todos, setTodos] = useLocalStorage('todos ',[]);
  const [filter , setFilter] = useState('all');
  const [todoId, setTodoId] = useLocalStorage('todoId',1) ;


  
  
  
  
  

  
  function todosFilter() {
    if (filter === 'all')
      {return (todos)}
    else if (filter==='active')
      {return (todos.filter(todo=>  !todo.isComplete ))}
    else if (filter==='completed')
      {return (todos.filter(todo=>  todo.isComplete ))}
    
    
  }

  
  return (
     
   < TodoContext.Provider value= {{
    todos ,
    setTodos ,
    todoId, 
    setTodoId ,
    todosFilter,
    filter ,
    setFilter}}> 

    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
         < TodoForm  />
         
          {todos.length >0 ?
           ( 
           <TodoList />
             ) 
           : (
            < NoTodo />
          )
      
          }
      </div>
    </div>
    </TodoContext.Provider>
   
   
  );
}

export default App;