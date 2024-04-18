import React from 'react'
import { useParams } from 'react-router-dom'


function Libro() {

    const { id } = useParams()
    
    fetch("./data.json"+id)

  return (
    <div>
      <h2>Detalle del libro {id}</h2>

    </div>
  )
}

export default Libro
