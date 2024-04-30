import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import data from "../data.json";
import Libro from '../pages/Detalle';


function DetalleContainer(props) {

    const [libro, setLibro]= useState([]);
    const id = useParams();

    const pedirPorID = () => {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                resolve(data);
            }, 500) 
        })
    }
    
useEffect(()=>{
    pedirPorID()
        .then((res)=>{
            if(id){
                setLibro(res.filter((libro)=> libro.id === id));
            }else{
                console.log("uhh")
            }
         })
         
},[])   

    
  return (
    <><div>
        <Libro libro={libro}/>
        {libro.title}
    </div>
    </>
  )
}

export default DetalleContainer
