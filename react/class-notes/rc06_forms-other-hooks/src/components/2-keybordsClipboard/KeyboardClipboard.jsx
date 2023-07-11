import { useState } from "react"


const KeyboardClipboard = () => {
    const [content, setContent] = useState(" ")

    const handleKeydown = (e) => {
        if(e.keyCode >= 48 && e.keyCode <= 57) {
            alert( "Please dont enter a number")
            e.preventDefault()
        }
    }
    // burada rakam girilmesini engelledik aski kodlarını kullanarak!

    const handlePaste = (e)=>{
        console.log(e.target)
        e.target.className =  "form-control border border-success border-4"
    }

  return (
    <div className="container mt-4">
        <h2 className="text-center">KeyboardClipboard</h2>

        <input
         type="text" 
         className="form-control"
         onChange={(e) => {
            setContent(e.target.value)
            e.target.value = e.target.value.toLocaleUpperCase()
        }}

            onKeyDown={handleKeydown}
            value={content}
        />

         <div className="mt-4">
            <h3>Copied Content</h3>
            <p>{content.toLocaleLowerCase()}</p>
         </div>

         <textarea 
         name="form-control" 
         id="" cols="30" 
         rows="10"
         onPaste={handlePaste}
         ></textarea>
      
    </div>
  )
}

export default KeyboardClipboard
