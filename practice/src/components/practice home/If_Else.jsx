import React, { useState } from 'react'

const If_Else = () => {
    // Both syntax are correct 
    const [LogIn,setLogIn]= useState(2)
    // const LogIn = 2
  return (
    <div>
        {
            LogIn==1?<h1>Welcome User 1</h1>:LogIn==2?<h1>Welcome User 2</h1>:<h1>Welcome User 3</h1>
        }
        
    </div>
  )
}

export default If_Else