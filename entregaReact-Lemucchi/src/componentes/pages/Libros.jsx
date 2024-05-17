import { useContext } from "react"
import { Link } from "react-router-dom"
import { contexto } from "../../contexto"


function Libros ({libros}) {

   const elValorDelContexto = useContext(contexto)
   
  

  return (
    <div className="flex flex-col border solid border-t-red-300 rounded-xl w-1/4 h-1/2">
    <div className="flex-row items-center">
        <div className="item-center">
          <img src={libros.image} alt={libros.title} className="w-48 h-70 object-cover p-3 " />
          </div>
        <h2 className="text-center text-2xl font-bold p-4 "> {libros.title} </h2>
        <div className="mt-2 gap-2 flex flex-row items-center md:flex-row md:justify-between">
          <h3 className="text-center text-xl font-bold p-4" >${libros.precio}</h3>
        </div>
        <div className="bg-red-400 w-100% h-10 rounded-md text-center">
        <Link className=" font-serif text-xl text-blak " to={`/Libros/${libros.id}`} >Ver mas</Link>
        </div>
    </div></div>
  )
}

export default Libros
