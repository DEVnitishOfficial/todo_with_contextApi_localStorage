
import { useEffect, useState } from 'react'
import './App.css'
import { TodoContextProvider } from './contexts';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';


function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((oldTodos) => [...oldTodos,{...todo}] )
  }

  const updateTodo = (id, currentTodo) => {
    setTodos((oldTodos) => oldTodos.map((individualOldTodo) => (individualOldTodo.id === id) ? currentTodo : individualOldTodo ) )
  }

  const deleteTodo = (id) => {
    setTodos((oldTodos) => oldTodos.filter((individualOldTodo) => individualOldTodo.id !== id ))
  }

  const toggleStatus = (id) => {
    setTodos((oldTodos) => oldTodos.map((individualOldTodo) => (individualOldTodo.id === id) ? {...individualOldTodo, status : !individualOldTodo.status} : individualOldTodo))
  }

  // using local storage
  useEffect(() => {
   const LocalTodos =  JSON.parse(localStorage.getItem("localTodos"))
   if(LocalTodos && LocalTodos.length > 0){
    setTodos(LocalTodos)
   }
  },[])

  useEffect(() => {
    localStorage.setItem("localTodos", JSON.stringify(todos))
  },[todos])



  return (
    <TodoContextProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleStatus}}>  
    <div className="bg-[#38144b] min-h-screen py-8">
    <div className=" flex flex-col justify-center items-center mx-auto  rounded-lg px-4 py-2 text-white">
      <h1 className="text-4xl font-bold max-w-2xl text-center  mt-2">
        Todo with context Api and LocalStorage
      </h1>
      <div className=" ">
        {/* Todo form goes here */}
        <TodoForm />
        
        
        </div>
      <div className="flex flex-wrap gap-x-10 gap-y-10 ">
        {/*Loop and Add TodoItem here */}
        {todos.map((todo) => (
              <div key={todo.id}
              className='ml-24 mr-1'
              >
                <TodoItem IndividualTodo={todo} />
              </div>
            ))}
        
      </div>
    </div>
  </div>
  </TodoContextProvider>
  )
}

export default App
