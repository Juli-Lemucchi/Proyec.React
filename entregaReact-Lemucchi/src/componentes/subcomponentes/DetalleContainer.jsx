import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import data from "../data.json";
import Libro from '../pages/Detalle';


function DetalleContainer() {

    const {libro, setLibro}= useState([]);
    const id = useParams().id;

    const pedirPorID = () => {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                resolve(data.id);
            }, 500)
        })
    }
useEffect(()=>{
    pedirPorID()
    .then((res)=>{
        if(id){
            setLibro(res.find((libro)=> libro.id===  id ))
        }
    })
})    

    
  return (
    <>{libro.map((libro)=>{
        return <Libro key={libro.id} libro={libro}/>
    })}
      
    </>
  )
}

export default DetalleContainer
