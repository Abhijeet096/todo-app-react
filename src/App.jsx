// import React from 'react'
import { useState } from "react";




const App = () => {
  const [input, setinput] = useState("")
  const [todos, settodos] = useState([])
  return (
    <div className="parent">
    
        <input type="text" 
          onChange={(event)=>{
            setinput(event.target.value)
          }}
        />
      <button 
      onClick={()=>{
        settodos([...todos , input])
      }}
      >Add</button>
       <p>{input}</p>
    </div>
  )
}

export default App
