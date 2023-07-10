import { useState } from "react"
import UseStateCounter from "./UseStateCounter"

const UseStateObject = () => {

    // const [name ,setName] = useState("Ahmet Selim")
    // const [age ,setAge] = useState(4)
    // const [salary ,setSalary] = useState(0)

    const [kisi , setKisi] = useState({
        name : "Ahmet Selim", 
        age: 4 ,
        salary : 0,
    })

    
    const [toggle , setToggle] = useState(true)

    const handleToggle = () => {
        setToggle(!toggle)

        if(toggle) {
            setKisi({
                name : "Ahmet Selim", 
                age: 4 ,
                salary : 0,
            })
        }else{ 
            setKisi(
            {
            name : "Esra", 
            age: 28 ,
            salary : 20000,
        }
      )

        }
    }


  return (
    <div>

      <h1>Use State Object </h1>
      <h2>Name: {kisi.name}</h2>
      <h2>Age:{kisi.age}</h2>
      <h2>Salary: {kisi.salary}</h2>

      <button onClick={() => setKisi({...kisi , name: "Tolga "})}>Change Name</button>

      <button onClick={() => setKisi({ ...kisi , age: kisi.age + 28})}>Change Age</button>
      
      <button onClick={() => setKisi({...kisi , salary: kisi.salary + 15000})}>Change Salary</button>

      <button onClick={() => setKisi(
            {
            name : "Esra", 
            age: 28 ,
            salary : 20000,
        }
      )}>Full Change</button>


    <button onClick={handleToggle}> Toggle</button>

    {toggle && <UseStateCounter />}
    {/* toogle a her bastığımızda UseStateCounter ı gösterip siler  */}



      {/* <h1>Use State Object </h1>
      <h2>Name: {name}</h2>
      <h2>Age:{age}</h2>
      <h2>Salary: {salary}</h2> */}
{/* 
      <button onClick={() => setName("Tolga")}>Change Name</button>
      <button onClick={() => setAge(32)}>Change Age</button>
      <button onClick={() => setSalary(15000)}>Change Name</button> */}

    </div>
  )
}

export default UseStateObject
