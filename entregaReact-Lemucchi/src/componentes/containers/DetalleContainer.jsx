import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import data from "../data.json";
import LibroDetalle from '../pages/LibroDetalle';
import { getLibroDetalle } from '../../funciones';


function DetalleContainer() {

    const [libro, setLibro]= useState([]);
    const {id} = useParams();
    
useEffect(()=>{
    
    getLibroDetalle(id)
    .then((res)=>{
        setLibro(res)
    })
         
},[])   

    
  return (
    <><div>
        <LibroDetalle libro={libro}/>
    </div>
    </>
  )
}

export default DetalleContainer
