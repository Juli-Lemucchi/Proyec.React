import React from 'react'
import "./LibroContainer"

function LibroDetalle (props){
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.precio}</p>
      <p>{props.categoria}</p>
      <p>{props.description}</p>
      <p>{props.portada}</p>
      <p>{props.id}</p>


      {/*<p>AAA</p>
      <section className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
      <LibroContainer/>
      </section>*/}
    </div>
  )
}

export default LibroDetalle
