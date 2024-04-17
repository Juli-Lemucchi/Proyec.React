import React from 'react'

function CardLibros(props) {
    
    const {id, title, categoria, description, precio, portada} = props

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-30% h-40%">
          <div className='card  w-100% h-100% bg-red-600'>
                <div className="card-image">
                <img className="w-full transition-all duration-500 rounded-md grayscale group-hover:grayscale-0 group-hover:scale-150" 
                src={portada} alt={title}/>
            </div>
            <h2 className="my-2 font-bold">{title}</h2>
            <h2>{categoria}</h2>
            <h2>{description}</h2>
            <h3>{precio}</h3>
            {/* <Button>ver mas</Button> */}
            </div> 
      </div>
  )
}

export default CardLibros
