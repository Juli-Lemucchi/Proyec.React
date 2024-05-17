import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import Libros from "../pages/Libros";
import data from "../data.json";
import {app} from"../../firebase"
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { getLibros, getLibrosPorCategoria } from "../../funciones";


function CardLibrosContainer() {
      
    const [libros, setLibros] = useState([]);
    const param = useParams()

  
useEffect(() => {


  if(param.category){
    getLibrosPorCategoria(param.category)
    .then((res)=>{
      setLibros(res)
    }) 
    
    }else{
      getLibros()
      .then((res)=>{
        setLibros(res)
      })
    }
    
  
}, [param.category])


return (

<> {libros.map((libros) => {
      return <Libros key={libros.id} libros={libros} />
  })}
  </>
)}


export default CardLibrosContainer




