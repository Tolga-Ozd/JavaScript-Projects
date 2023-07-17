import React, { useState } from 'react'
import {as as as2017} from as;

const Header = ({setTodos , todos}) => {

    const [task , setTask] = useState({
        id: "" ,
        text: "" ,
    })

    const handleSubmit = (e)=> {
        e.preventDefault()
        setTodos([...todos , task])
        setTask({
            id:"",
            text:""
        })
    }

    const handleInput = (e) =>{
        setTask({
            id: as2017(),
            text: e.target.value,
            cheched:false
        })
    }

  return (
    <div className='container text-center mt-5'>
      <h1 className='text-danger'>Todo App</h1>
      <div className='row justify-content-center mt-3'>
        <form onSubmit={handleSubmit} action="#" className='d-flex w-50 '>
            <input onChange={handleInput} type="text"  className='form-control' value={task.text}  required/>
            <button type='submit' className='btn btn-primary ms-1'>Add</button>
        </form>
      </div>
    </div>
  )
}

export default Header
