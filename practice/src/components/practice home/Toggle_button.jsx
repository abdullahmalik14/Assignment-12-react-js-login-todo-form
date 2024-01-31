import React, { useState } from 'react'

const Toggle_button = () => {
    const [status,setStatus] = useState(false)
  return (
    
    <div>
      {
        status?<h1>Abdullah Asim</h1>:null
      }
        
        <button onClick={()=>setStatus(!status)}>Toggle</button>
    </div>
  )
}

export default Toggle_button
