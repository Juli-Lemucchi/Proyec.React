import React from 'react'

function CardLibros(cardLibro) {
    
    const {id, title, categoria, description, precio, portada} = cardLibro

  return (
    <div>
        <div className="card">
            <img src={cardLibro.portada} alt={cardLibro.title} className="w-60"/>
            <h2>{cardLibro.title}</h2>
            <h3>{cardLibro.precio}</h3>
            <h3>{cardLibro.id}</h3>
      
        </div>
    </div>
  )
}

export default CardLibros
