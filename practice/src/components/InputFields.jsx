import { TextField } from '@mui/material'
import React from 'react'

const InputFields = ({ placeholder, id, type, onChange,required }) => {
  return (
<TextField  sx={{width:"100%",mt:'2'}}
placeholder={placeholder}
id={id}
type={type}
onChange={onChange}
required={required}
/>


  )
}

export default InputFields  