import React from 'react'

function Input({
    id="test",
    type= "text",
    placeholder="Escriba un valor",
    text="Ingrese test",
    onChange
     }) {



    const handleChange = (e) => {
        onChange(e.target.value)
    }

  return (
    <div>
      <label htmlFor={id} className='text-black'> {text}</label>
      <input type={type} id={id} placeholder={placeholder} onChange={handleChange}/>
    </div>
  )
}

export default Input
