import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { libroVendido } from '../../funciones'
import Input from '../subcomponentes/Formulario'
import useCart from '../hooks/useCart'

function Carrito() {

    const {carrito} = useCart()

    const handleSubmit=(e) =>{
        e.preventDefault()
        toast.loading('Procesando pedido...')
        libroVendido()
        toast.dismiss()
        toast.success("Compra realizada con exito!")
    }

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const onNameChange = (nombre) => {
        setName(nombre)
    }
    const onEmailChange = (email) => {
        setEmail(email)
    }



  return (
    <div>
      <h2>Tu Compra</h2>
      <div>
        {carrito.map((libro) => {
             return (
                <div>
                    <h3>{libro.title}</h3> <p>{libro.precio}</p> 
                </div>   
            )}
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <Input onChange={onNameChange} placeholder="Escriba su nombre" text="Ingrese su nombre" id="nombre"/>
        </div>
        <div>
          <Input onChange={onEmailChange} placeholder="Escriba su email" text="Ingrese su email" id="email" type="email" />
        </div>
        <button type="submit" className='bg-red-400 w-14 h-6 rounded-md font-serif text-sm text-blak'>Finalizar compra</button>
      </form>
    </div>
  )
}

export default Carrito
