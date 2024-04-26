import React from 'react'

function Libro({libro}) {

  return (
    <div className='flex flex-row'>
      <div className='flex-col'><img src={libro.portada} alt={libro.title} className="w-48 h-70 object-cover p-3" /></div>
      <div className='flex-col'>
      <h2 className="text-center text-2xl font-bold p-4 "> {libro.title}</h2>
      <p>{libro.description}</p>
      <div className='flex-row'>
        <h4>{libro.precio}</h4>
        <h4>{libro.categoria}</h4>
      </div>
      </div>
    </div>
  )
}

export default Libro
