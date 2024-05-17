import React from 'react'
import Contador from '../subcomponentes/Contador'
import useCart from '../hooks/useCart'
import { toast } from 'react-toastify'

function LibroDetalle ({libro}) {

  const valorDelContexto = useCart()
  
  const handleConfirm = (numero) => {
    valorDelContexto.agregarAlCarrito(numero, libro.libro)
    toast.success("Se agrego un producto al carrito!")
}



  return (
    <div className='flex flex-row'>
      <div className='w-1/4 h-1/3  m-2 p-2'>
      <img src={libro.image} alt={libro.title} className='border-red-300'/>
      </div>
      <div className='w-2/3'>
        <h2 className='text-5xl text-blak shadow-md text-center'>{libro.title}</h2>
        <p className='p-2 text-balance'>{libro.description}</p>
        <div className='shadow-md text-xl text-blak text-star p-2'>
          <h4>Categoria:{libro.category}</h4>
          <h3>${libro.precio}</h3>
        </div>
        <div>
          <Contador handleConfirm={handleConfirm}/>
        </div>
      </div>
    </div>
    
  )
}

export default LibroDetalle
