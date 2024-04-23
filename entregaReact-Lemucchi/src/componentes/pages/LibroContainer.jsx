import {  useState, useEffect  } from 'react'
import { useParams } from 'react-router-dom'
import LibroDetalle from './LibroDetalle';



function LibroContainer() {

        const { id } = useParams();
        const [libro, setLibro] = useState({})
        

    useEffect(() => {
        
        let pedido
        pedido.fetch("./data.json") 
        pedido.then((res)=>{
            return res.json()
        })
        pedido.then(res=>{
            const libros = res ;
            const libroFiltrados = libros.find(item => item.id === id);
            console.log(libroFiltrados)
            setLibro(libroFiltrados)
        })
        pedido.catch(err=>{
            console.log(err)
        })





        {/*let ped;
        ped.fetch("./data.json")
            ped.then((res)=>{
                return res.json()
            })
            ped.then((libro)=>{
                setLibro(libro)
            })
            ped.catch((err)=>{
                console.log(err)
            })
        const libroEleg = ped.filter(item => item.id === id);
            console.log(libroEleg)



        fetch("./data.json/" + id)
            .then((res) => {
                return res.json()
            })

            .then((res) => {
                setLibro(res)
            })

            .catch((err)=>{
                console.log(err)
            })
        */}

    }, []);

    return (
        <div>
            <p>aaa</p>
            <LibroDetalle libro={libro}/>
        </div>
    )

}


export default LibroContainer
