import React, { useState } from 'react'
import { UseTodo } from '../context/TodoContext'

function TodoItem({todo}) {
    const {updateTodo, toggleComplete, removeTodo}=UseTodo();
    const  [isEditable, setIsEditable]=useState(false);
    const [todoMsg, setTodoMsg]=useState(todo.todo)

  return (
    <div>
        <input type="checkbox" />
        <input type="text" />
        <button></button>
        <button></button>
    </div>
  )
}

export default TodoItem