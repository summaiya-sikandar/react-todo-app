import React, { useContext } from 'react'


import { TodoContext } from './useContext';



function TodoFilters() {
  const {todosFilter , filter, setFilter} = useContext(TodoContext);
  
  return (
    <div>
    <button onClick={ ()=> 
              {setFilter('all');
              todosFilter();}
            } 
    
            className={`button filter-button  ${ filter==='all'? `filter-button-active` : " "}`}
            >
              All
            </button>
            <button onClick={ ()=> 
              {setFilter('active');
              todosFilter();}
            } 
            className={`button filter-button  ${ filter==='active'? `filter-button-active` : " "}`}
              
            >Active</button>
            <button onClick={ ()=> 
              {setFilter('completed');
              todosFilter();}
            } 
            className={`button filter-button  ${ filter==='completed'? `filter-button-active` : " "}`}
              
             >Completed</button>
          </div>
  )
}

export default TodoFilters