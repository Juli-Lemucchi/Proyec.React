import React from 'react'
import { Link }  from "react-router-dom"

function CardLibros(cardLibro) {
    
    const {id, title, categoria, description, precio, portada} = cardLibro

  return (
    <div>
        <div className="card">
            <img src={portada} alt={title} className="w-60"/>
            <h2>{title}</h2>
            <h3>{precio}</h3>
            <h3>{id}</h3>
            
        </div>
    </div>
  )
}

export default CardLibros
