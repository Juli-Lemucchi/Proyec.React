import React, { useEffect, useState } from 'react'
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
        })*/
        
        const miPromesa = new Promise((res) => {
            setTimeout(() => {
              res(Libros)
            }, 2000)
          })
          
          miPromesa.then((res)=>{
            console.log(res)
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

export default CardLibrosContainer