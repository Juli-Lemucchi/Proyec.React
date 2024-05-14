import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import Libros from "../pages/Libros";
import data from "../data.json";
import {app} from"../../firebase"
import { collection, getFirestore} from "firebase/firestore";


const infoFirebase = getFirestore(app)

const coleccionLibros =collection(infoFirebase, "libros")

function CardLibrosContainer() {
      

    const [libros, setLibros] = useState([]);
    const category = useParams().categoria 
    

    const pedido = () => {
      return new Promise((resolve, reject) => {
          setTimeout( () => {
              resolve(data); 
          }, 500)
      })
    }


useEffect(() => {
  pedido()
      .then((res) => {
          if (category){
            setLibros( res.filter((libro) => libro.categoria === category) );
          } else {
            setLibros(res);
          }
      })
}, [category])


return (

<> {libros.map((libros) => {
      return <Libros key={libros.id} libros={libros} />
  })}
  </>
)}


export default CardLibrosContainer




