import React, { useState } from 'react'
import { UseTodo } from '../context/TodoContext'

function TodoItem({todo}) {
    const {updateTodo, toggleComplete, removeTodo}=UseTodo();
    const  [isEditable, setIsEditable]=useState(false);
    const [todoMsg, setTodoMsg]=useState(todo.todo)

    const editTodo=()=>{
        updateTodo(todo.id, {...todo, todo: todoMsg});
        setIsEditable(false);

    }  

    const toggleCompleted=()=>{
        toggleComplete(todo.id)
    }

  return (
    <div className={`${todo.complete ? "bg-green-200 ": "bg-purple-300"}`}>
        <input type="checkbox" checked={todo.complete} onChange={toggleCompleted} />
        <input type="text" value={todoMsg} onChange={(e)=>setIsEditable(e.target.value)} readOnly={!isEditable} />
        <button onClick={()=>{
            if(todo.complete) return;

            if(isEditable){
                editTodo();
            }else{
                setIsEditable((prev)=>!prev);
            }
        }}
        disabled={todo.complete}
        >{isEditable ? "📁" : "✏️"}</button>
        <button onClick={() => removeTodo(todo.id)}>❌</button>
    </div>
  )
}

export default TodoItem