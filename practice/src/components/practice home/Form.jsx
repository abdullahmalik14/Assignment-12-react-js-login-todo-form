import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("")
    const [check, setCheck] = useState(false)
    const [tnc, setTnc] = useState("")
    const getFormData = (e) => {
        console.log(name, check, tnc)
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={getFormData}>
                <input required type="text" placeholder='Enter name' onChange={(e) => setName(e.target.value)} /> <br /><br />
                <select required onChange={(e) => setCheck(e.target.value)}>
                    <option>select options</option>
                    <option>pakistan</option>
                    <option>USA</option>
                </select><br /><br />
                <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} /><span>Accept terms and conditions</span><br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form