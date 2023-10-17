

import {createContext, useContext} from "react";

export const todoContext = createContext({
    todos : [
        {
            id : 1,
            todo : 'todo 1',
            status : false
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {}, 
    toggleStatus : (id) => {},
})

export const useTodo = () => {
     return useContext(todoContext)
}

export const TodoContextProvider = todoContext.Provider;