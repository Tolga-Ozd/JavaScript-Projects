import React, { useState } from 'react'
import {Button, Form , InputGroup} from "react-bootstrap"

const Header = ({todos , setTodos}) => {

    const [task , setTask] = useState("")

    const addTodo = ()=>{
        console.log(task)
        setTask =("")
      }
    

    // const handleSubmit = (e)=> {
    //     e.preventDefault()
    //     setTodos([...todos , task])
    //     setTask({
    //         id:"",
    //         text:""
    //     })
    // }

    // const handleInput = (e) =>{
    //     setTask({
    //         // id: as2017(),
    //         text: e.target.value,
    //         cheched:false
    //     })
    // }

    return (
    <div>
      <h1 className='text-danger text-center m-5'>React Todo App</h1>
      <InputGroup className='mb-3 w-50 d-flex mx-auto'>
          <Form.Control
          placeholder ="Enter new todo.."
          aria-label ="Recipient's username"
          aria-describedby ="basic-addon2"
          value = {task}
          onChange ={(e)=>setTask(e.target.value)}
          />
                
        <Button className='input-group-text bg-success' id=" basic-addon2" onClick={addTodo}>Add</Button>
      </InputGroup>
       
    </div>
  )
  
  }

export default Header
