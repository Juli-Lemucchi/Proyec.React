import React from 'react'
import { Link } from 'react-router-dom'

function CardLibros(libro) {
    
    const { id, title, portada } = libro

  return (
    <div className="p-4 transition rounded-md shadow-md user-card hover:scale-105 group bg-slate-300">
            <div className="overflow-hidden aspect-video">
                <img className="w-full transition-all duration-500 rounded-md grayscale group-hover:grayscale-0 group-hover:scale-150" 
                src={portada} alt="card image" />
            </div>
            <h2 className="my-2 font-bold">{title}</h2>
            {/* <Button>ver mas</Button> */}
            <Link to={`/Libros/${id}`}>ver mas</Link>
        </div>
  )
}

export default CardLibros
