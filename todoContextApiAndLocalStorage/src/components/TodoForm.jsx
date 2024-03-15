import React, { useState } from 'react'
import { UseTodo } from '../context/TodoContext';

function TodoForm() {
    const [todo, setTodo]=useState("");
    const {addTodo}=UseTodo()

    const add=(e)=>{
        e.preventDefault();
        
        if(todo) return;

        addTodo({todo, complete: false});
        setTodo("")

    }
  return (
    <form onSubmit={add} className=''>
        <input   type="text" placeholder='Write Todo...' value={todo} onChange={(e)=>setTodo(e.target.value)} className='' />
        <button type='submit' className=''>Add</button>
    </form>
  )
}

export default TodoForm