import { Link } from "react-router-dom"

function Libros ({libros}) {

  

  return (
    <div className="flex flex-col border-2 solid rounded-xl">
    <div className="flex-row items-center">
        <div>
          <img src={libros.portada} alt={libros.title} className="w-48 h-70 object-cover p-3" />
          </div>
        <h2 className="text-center text-2xl font-bold p-4 "> {libros.title} </h2>
        <div className="mt-2 gap-2 flex flex-row items-center md:flex-row md:justify-between">
          <h3>{libros.precio}</h3>
          <button><Link className="bg-red-400 w-14 h-6 rounded-md font-serif text-sm text-blak" to={`/Libros/${libros.id}`} >Ver mas</Link></button>
        </div>
    </div></div>
  )
}

export default Libros
