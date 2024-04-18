import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
function CardLibrosContainer() {
      
  
    const [libros, setLibros] = useState([]);
    console.log(libros)

useEffect(() => {

  fetch("./data.json")
    .then((response) => {

      if (!response.ok) {
      throw new Error("Error al cargar las ofertas");
      }


      return response.json();
    })

    .then((data) => {
      setLibros(data);
    })

    .catch((error) => {
    console.error("Error busqueda de ofertas:", error);
    });
  
  }, []);

return (

<> {libros.map((libros) => (
   <div key={libros.id} className="m-2 flex flex-col items-center border-2 solid rounded-xl">
      <img src={libros.portada} alt={libros.title} className="w-48 h-48 object-cover " />
      <div className="mt-2 gap-2 flex flex-col items-center md:flex-row md:justify-between">
          <p className="text-xxs font-bold"> {libros.title} </p>
          <span>{libros.precio}</span>
          <Link className="bg-slate-400 w-14 h-6 rounded-md font-serif text-sm text-white" to={`/Libros/${libros.id}`} > Comprar</Link>
      </div>
  </div>
  ))}

</>
)}


export default CardLibrosContainer



/*import React, { useEffect, useState } from 'react'
import CardLibros from './CardLibros'
import { Libros } from "../../Data"

function CardLibrosContainer() {
    
    const [libros, setLibros]= useState([])

    useEffect(()=>{

        /*fetch("/data.json")
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            setLibros(res.results)
        })
        .catch((err)=>{
            console.log(err);
        })
        
        const miPromesa = new Promise((res) => {
            setTimeout(() => {
              res(Libros)
            }, 2000)
          })
          /*
          miPromesa,then((res)=>{
            return res.json()
          }) 
          miPromesa.then((res)=>{
            setLibros(res)
          })
    },[])
    

  return (
    <>
      {Libros.map((libro)=>{
          return (<CardLibros key={libro.id} libro={libro}/>)
      })}
    </>
  )
}

export default CardLibrosContainer*/