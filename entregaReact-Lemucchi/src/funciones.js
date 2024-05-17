import { collection, getDocs, getDoc, doc, getFirestore, query, where, addDoc, serverTimestamp } from "firebase/firestore"
import { app } from "./firebase"


export const getLibros = () => {
    const db = getFirestore(app)
    const librosCollection = collection(db, "libros")
    const consulta = getDocs(librosCollection)
  
    return consulta
    .then((resultado) => {
      const libros = resultado.docs.map(doc => {
        const libro = doc.data()
        libro.id = doc.id
        return libro
      })
      return libros
    })
    .catch((err) => {
      console.log(err)
    })
}

export const getLibrosPorCategoria = (category) => {
    const db = getFirestore(app)
    const librosCollection = collection(db, "libros")
    const filtro = query(librosCollection, where("category", "==", category))
    const consulta = getDocs(filtro)
    

    return consulta
    .then((resultado) => {
      const libros = resultado.docs.map(doc => {
        const libro = doc.data()
        libro.id = doc.id
        return libro
      })
      return libros
    })
    .catch((err) => {
      console.log(err)
    })
}

export const getLibroDetalle = (id) => {
    const db = getFirestore(app)
    const librosCollection = collection(db, "libros")
    const filtro = doc(librosCollection, id)
    const consulta = getDoc(filtro)

  return consulta
    .then((resultado) => {
      const libro = resultado.data()
      libro.id = resultado.id
      return libro
    })
    .catch((err) => {
      console.log(err)
    })
    
}

export const getLibroFav = () => {
    
}

export const libroVendido = () => {
    const db = getFirestore(app)
    const ventasCollection = collection(db, "ventas")
    const venta ={
        item: { },
        usuario: { nombre: " ", email: " "},
        fechaDeCompra: serverTimestamp(),
        estado: "pendiente",
        total: 0
    }
    const consulta = addDoc(ventasCollection, venta)
    consulta
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}