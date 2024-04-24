import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import Libros from "./pages./Libros.jsx";

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
      return response.json();
    })
  pedido.then((data) => {
      setLibros(data);
    })
  pedido.catch((error) => {
    console.error("Error busqueda libros:", error);
    });
  
  }, [params.categoria]);
  console.log(libros)
return (

<> {libros.map((libros) => {
      return <Libros key={libros.id} libros={libros} />
  })}
  </>
)}


export default CardLibrosContainer



