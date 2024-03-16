import React, { useState } from 'react'
import { UseTodo } from '../context/TodoContext'

function TodoItem({todo}) {
    const  [isEditable, setIsEditable]=useState(false);
    const [todoMsg, setTodoMsg]=useState(todo.todo)
    const {updateTodo, toggleComplete, removeTodo}=UseTodo();

    const editTodo=()=>{
        updateTodo(todo.id, {...todo, todo: todoMsg});
        setIsEditable(false);

    }  

    const toggleCompleted=()=>{
        toggleComplete(todo.id)
    }

  return (
    <div className={`flex border border-black  rounded-lg px-3 py-1.5 shadow-md shadow-white/50 duration-300 text-black ${todo.complete ? "bg-green-200 ": "bg-purple-300"}`}>
        <input type="checkbox" 
        className='cursor-pointer' checked={todo.complete} onChange={toggleCompleted} />

        <input type="text" className={`border outline-none w-full bg-transparent rounded-lg ${isEditable ? "border-black/10 px-2" : "border-transparent"} ${todo.complete ? "line-through" : ""}`} 
        value={todoMsg} 
        onChange={(e)=>setTodoMsg(e.target.value)} 
        readOnly={!isEditable} />

        <button className='inline-flex w-8 h-8 rounded-lg bg-gray-50  text-sm border border-black/10 justify-center items-center  hover:bg-gray-200 shrink-0 disabled:opacity-50 ' 
        onClick={()=>{
            if(todo.complete) return;

            if(isEditable){
                editTodo();
            }else{
                setIsEditable((prev)=>!prev);
            }
        }}
        disabled={todo.complete}
        >{isEditable ? "📁" : "✏️"}</button>
        <button className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0' 
        onClick={() => removeTodo(todo.id)}>❌</button>
    </div>
  )
}

export default TodoItem