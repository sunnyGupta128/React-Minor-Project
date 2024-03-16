import React, { useState } from 'react'
import { UseTodo } from '../context/TodoContext';

function TodoForm() {
    const [todo, setTodo]=useState("");
    const {addTodo}=UseTodo()

    const add=(e)=>{
        e.preventDefault();
        
        if(!todo) return;

        addTodo({todo, complete: false});
        setTodo("")

    }
  return (
    <form onSubmit={add} className='flex'>
        <input   type="text" placeholder='Write Todo...' value={todo} onChange={(e)=>setTodo(e.target.value)} className='w-full border border-black/10 rounded-l-lg px-3 import TodoForm from outline-none duration-150 bg-white/10 py-1.5' />
        <button type='submit' className='rounded-r-lg px-3 py-1 bg-cyan-300 text-blue-950 shrink-0'>Add</button>
    </form>
  )
}

export default TodoForm