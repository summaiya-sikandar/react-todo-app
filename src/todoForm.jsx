import { useContext } from "react";
import { useState } from "react";
import { TodoContext } from "./useContext";

function TodoForm () {
    const {todos ,setTodos , todoId, setTodoId} = useContext(TodoContext);

    const [todoInput, setTodoInput] = useState('');

    function handleChange (event){
        setTodoInput(event.target.value);
      }

      function addTodo (event) {
        event.preventDefault();
       if (todoInput.trim().length === 0) {
      return;
    }
    setTodos ([...todos , {
      id: todoId,
      title: todoInput,
      isComplete: false,
     }])

      
     setTodoId( prevId => prevId+1);
      setTodoInput('');
    
      }
    return ( 
        <form action="#" onSubmit={addTodo}>
        <input
          type="text"
          value={todoInput}
          onChange={handleChange}
          className="todo-input"
          placeholder="What do you need to do?"
        />
      </form>
     );
}
 
export default TodoForm;