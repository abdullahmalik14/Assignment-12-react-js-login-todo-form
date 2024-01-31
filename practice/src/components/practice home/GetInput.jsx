import React, { useState } from 'react'

const GetInput = () => {
    const [data,setData] = useState(null)
    const [print,setPrint] = useState(false)
   
  return (
    <div>

        <input type="text" onChange={(e)=>setData(e.target.value)} />

       {
        print? <h1>{data}</h1>:null
       }

        <button onClick={()=>setPrint(true)}>Submit</button>
    </div>
  )
}

export default GetInput