import { useState } from "react"

const FormObject = () => {

    const [formData , setFormData] = useState ({
        username: "",
        email: "",
        password:"",
    })

    // destructuring
    const {username ,email , password } = formData


    const handleSubmit = (e) => {
        e.preventDefault()

        alert  (`
        username: ${username}
        email:${email}
        password:${password}        
        `)

        setFormData({
            username: "",
            email: "",
            password: "",
          })

    const handleFormData = (e) => {
        setFormData({...formData , [e.target.id]: e.target.value})
    }

  return (

    <div className="container mt-4" > 
    <h2 className="text-center text-success">Form Object in React</h2>
      <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Hello {username}</label>
                <input type="user" className="form-control" id="username" aria-describedby="userHelp" 
                onChange={handleFormData}
                value={username}
                />
                
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address: <span className="text-danger">{email}</span></label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" 
                onChange={handleFormData}
                value={email}
                />
               
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password"
                onChange={handleFormData}
                value={password}
                />
            </div>
           
            <div className="text-center">
            <button type="submit" className="btn btn-success">Submit</button>
            </div>
        </form>
    </div>  
  )
}


}
export default FormObject
