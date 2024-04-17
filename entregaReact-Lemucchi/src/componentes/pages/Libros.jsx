import React from 'react'
import CardLibrosContainer from '../subcomponentes/CardLibrosContainer'

function Libros() {
  return (
    <div>
      <h2>Nuestros libros</h2>
      <section className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
      <CardLibrosContainer/>
      </section>
      
    </div>
  )
}

export default Libros
