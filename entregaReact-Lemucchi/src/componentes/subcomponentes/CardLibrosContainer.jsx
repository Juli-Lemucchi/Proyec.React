import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardLibros from './CardLibros'
import { data } from "./data.jsx"

function CardLibrosContainer() {
    
    const [libros, setLibros]= useState([])

    useEffect(()=>{

        fetch("https://rickandmortyapi.com/api/character")
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            setLibros(res.results)
            res.results.forEach((character)=>{
                console.log(character)
            })
        })
        .catch((err)=>{
            console.log(err);
        })
        /*
        const miPromesa = new Promise((res) => {
            setTimeout(() => {
              res(data)
            }, 2000)
          })
          
          miPromesa.then((res)=>{
            console.log(res)
          })*/
    },[])
    

  return (
    <>
    {libros.map((libro)=>{
        return (
        <CardLibros key={libro.id} 
            cardLibro={libro}
        />)
    })}
    </>
  )
}

export default CardLibrosContainer
