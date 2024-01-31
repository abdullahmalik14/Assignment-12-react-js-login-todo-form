import React, { useEffect } from 'react'

const Function_props = (props) => {
    const popup = () => {
        alert("Heyyyyy!!!!!")
    }

    useEffect(() => {
        popup();}
        ,[]);
  return (
    <div onLoad={popup}>
        <h1>Props Function Pass</h1>
        <button onClick={props.data}>click</button>
    </div>
  )
}

export default Function_props