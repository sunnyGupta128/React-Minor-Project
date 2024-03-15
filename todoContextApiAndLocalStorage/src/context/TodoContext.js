import { createContext, useContext } from "react";

export const TodoContext=createContext({
    todos: [
        {
            id: 1,
            todo: "Text Msg",
            complete: false,
        },
    ],
    addTodo: (id)=>{},
    updateTodo: (id, todo)=>{},
    removeTodo: (id)=>{},
    toggleComplete: (id)=>{}
})

export const UseTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider