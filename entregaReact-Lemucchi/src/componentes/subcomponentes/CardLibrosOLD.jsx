import { Button } from "antd"
import { Heart } from "lucide-react"
import { useState } from "react"

function CardLibrosOLD(props) {
    const [contador, setContador] = useState(0)
    const handleClick =()=>{
        setContador(contador+1)
    }

  return (
    <div className="card">
      <img src="./public/libroPrueba.jpg" alt="Portada de libro" className="w-60"/>
      <h2>{props.titulo}</h2>
      <h3>{props.precio}</h3>
      <div className="flex flex-row text-center"><Button>Comprar</Button>
      <Button onClick={handleClick} >
            <Heart width={25} height={25} className="bg-red-400"/>
            <span className="absolute inline-block top-0">
                <span className="relative   text-white font-bold text-s rounded-full p-1 ">{contador}</span>
            </span>
            </Button></div>
    </div>
  )
}

export default CardLibrosOLD
