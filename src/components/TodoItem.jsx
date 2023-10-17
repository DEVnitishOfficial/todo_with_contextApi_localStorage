import React, { useState } from 'react'
import { useTodo } from '../contexts'

function TodoItem({ IndividualTodo }) {
  console.log('todoItem todo',IndividualTodo)

    const [isEditable, setIsEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(IndividualTodo.todokey,IndividualTodo.num)
    const {updateTodo,deleteTodo} = useTodo()

    const editTodo = () => {
      updateTodo(IndividualTodo.id, {...IndividualTodo, todokey : todoMsg});
      setIsEditable(false)
    }
  return (
    <div className="bg-slate-800 w-80 px-10 py-10   text-white">
           <input className={` text-2xl mb-[20px] ml-[-20px] bg-transparent outline-none m-5 p-1 ${
                    isEditable ? "border-2 border-yellow-300 opacity-100" : "bg-transparent"
                }`}
            type="text"
            value={todoMsg}
            onChange={ (e) => setTodoMsg(e.target.value)}
            readOnly = {!isEditable}
          />
     
      <p className=' text-start mb-[20px] ml-[-20px]'>{isEditable ? "Status : Pending" : "Status : Completed"}</p>

          <button className="bg-blue-800 rounded-lg py-2 px-5 w-full mb-4 "
           onClick={ () => {
            if(IndividualTodo.status) return
            if(isEditable){
              editTodo()
            }else(setIsEditable((prevStatus) => !prevStatus ))
           }}>
            {isEditable ? "Save" : "Update Status"}
            </button>

            <button className="bg-blue-800 rounded-lg py-2 px-5 w-full mb-4 "
           onClick={ () => deleteTodo(IndividualTodo.id)}>
           Remove
            </button>
        </div>
  )
}

export default TodoItem