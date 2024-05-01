import React from 'react'

function LibroDetalle ({libro}) {

  return (
    <div className='m-2 flex flex-row'>
      <div className='flex-col'>
        <img src={libro.portada} alt={libro.title}/>
      </div>
      <div className='flex-col'>
        <h2 className='text-5xl text-blak shadow-md text-center'>{libro.title}</h2>
        <p className='p-2 text-balance'>{libro.description}</p>
        <div className='shadow-md text-xl text-blak text-center'>
          <h4>{libro.categoria}</h4>
          <h3>{libro.precio}</h3>
        </div>
      </div>
    </div>
    
  )
}

export default LibroDetalle
