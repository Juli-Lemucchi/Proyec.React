import { createContext, useState } from "react";

export const contexto = createContext();
const Provider = contexto.Provider


function CustomContext(props){

    const [carrito, setCarrito] = useState([])
    const[precio, setPrecio] = useState(0)
    const[cantCarrito, setCantCarrito] = useState(0)


    const agregarAlCarrito = (cant, item) => {
        setCantCarrito(cantCarrito + cant)

        const copia = carrito.slice(0)
        const productoConCantidad = item
        productoConCantidad.cantidad = cant
        copia.push(productoConCantidad)
        setCarrito(copia)
    }

    

    const vaciarCarrito = () => {  
        setCantCarrito(0)
        setCarrito([])
    }



    const value = {
        carrito: carrito,
        cantCarrito: cantCarrito,
        precio: precio,
        agregarAlCarrito: agregarAlCarrito,
        vaciarCarrito: vaciarCarrito
    }
 
    return(
        <Provider value={value}>
           {props.children} 
        </Provider>
    )
}

export default CustomContext 