import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import data from "../data.json";
import LibroDetalle from '../pages/LibroDetalle';


function DetalleContainer() {

    const [libro, setLibro]= useState([]);
    const {id} = useParams();

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
                setLibro(res.find(libro => libro.id === parseInt(id)));
            }else{
                console.log(res)
            }
         })
         
},[id])   

    
  return (
    <><div>
        <LibroDetalle libro={libro}/>
    </div>
    </>
  )
}

export default DetalleContainer
