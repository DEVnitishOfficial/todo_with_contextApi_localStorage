import React, { useState } from 'react'
import {useTodo} from '../contexts'

function TodoForm() {

const [todo, setTodo] = useState('')  // this todo is individual todo
const {addTodo} = useTodo()

const add = (e) => {
    e.preventDefault
    if(!todo) return

    addTodo({id : Date.now(), todokey : todo, status : false });
    setTodo("")
}


  return (
    <form onSubmit={add}>
        <div className="bg-white p-10 m-20 w-[800px] rounded-md flex justify-center items-center text-center  lg:space-x-96 md:space-x-32 sm:space-x-32 ">
    <input className="p-1 border-2 rounded-md border-blue-500 outline-none text-black"
     type="text"
     placeholder="Learn useRef"
     value={todo}
     onChange={(e) => setTodo(e.target.value)} 
      />
    <button className="bg-[#5b3271] pt-3 pb-3 pl-10 pr-10 rounded-lg text-white"
    type='submit'>Add</button>
    </div>
    </form>
  )
}

export default TodoForm