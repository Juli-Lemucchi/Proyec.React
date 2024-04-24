import { Link } from "react-router-dom"
function Libros (libros) {

  const {portada,title,precio,id} = libros

  return (
    <div className="m-2 flex flex-col items-center border-2 solid rounded-xl">
        <div><img src={portada} alt={title} className="w-48 h-70 object-cover p-3" /></div>
        <h2 className="text-center text-2xl font-bold p-4 "> {title} </h2>
        <div className="mt-2 gap-2 flex flex-row items-center md:flex-row md:justify-between">
          <h3>{precio}</h3>
          <Link className="bg-red-400 w-14 h-6 rounded-md font-serif text-sm text-blak" to={`/Libros/${id}`} >
            <button>Ver mas</button></Link>
        </div>
    </div>
  )
}

export default Libros
