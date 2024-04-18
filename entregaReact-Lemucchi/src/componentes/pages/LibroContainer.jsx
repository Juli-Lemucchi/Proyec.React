import React from 'react'
import { useParams, useState, useEffect } from 'react-router-dom'
import Libro from "./Libro"


function Libro() {

    const { id } = useParams()
    
    const [libro, setLibro] = useState({})

    useEffect(() => {
        fetch("./data.json" + id)
            .then((res) => {
                return res.json()
            })
            .then((libro) => {
                setLibro(libro)
            })

    }, []);

    return (
        <div>
            <Libro libro={libro} />
        </div>
    )

}


export default LibroContainer
