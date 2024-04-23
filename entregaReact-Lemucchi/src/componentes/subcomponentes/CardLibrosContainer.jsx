import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
function CardLibrosContainer() {
      

    const [libros, setLibros] = useState([]);
    const params = useParams()
    

useEffect(() => {

  let pedido;
  if(params.categoria){
    pedido.fetch("./data.json"+params.categoria)
  }else{
    pedido.fetch("./data.json")
  }
  pedido.then((response) => {

      if (!response.ok) {
      throw new Error("Error al cargar los libros");
      }
      return response.json();
    })

    pedido.then((data) => {
      setLibros(data);
    })

    pedido.catch((error) => {
    console.error("Error busqueda libros:", error);
    });
  
  }, [params.categoria]);

return (

<> {libros.map((libros) => (
   <div key={libros.id} className="m-2 flex flex-col items-center border-2 solid rounded-xl">
     <div><img src={libros.portada} alt={libros.title} className="w-48 h-70 object-cover p-3" /></div>
     <h2 className="text-center text-2xl font-bold p-4 "> {libros.title} </h2>
      <div className="mt-2 gap-2 flex flex-row items-center md:flex-row md:justify-between">
          <h3>{libros.precio}</h3>
          <Link className="bg-red-400 w-14 h-6 rounded-md font-serif text-sm text-blak" to={`/Libros/${libros.id}`} >
            <button>Ver mas</button></Link>
      </div>
  </div>
  ))}
</>
)}


export default CardLibrosContainer



