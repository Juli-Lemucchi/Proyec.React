import { Routes, Route} from "react-router-dom"
import CardLibros from "./subcomponentes/CardLibros"
import Home from "./pages/Home"
import Libros from "./pages/Libros"
import Libro from "./pages/Libro"
import Usuario from "./pages/Usuario"

function Main (){
    return( 
    <main  className="p-4 grow h-[100dvh]">
                
              <Routes>

                <Route path="/" element={<Home/>}/>

                <Route path="/Libros" element={<Libros/>}/>

                <Route path="/Libros/:id" element={<Libro/>}/>

                

                <Route path="/Usuario" element={<Usuario/>}/>

                {/*<Route path="*" element={alert("ERROR")}/>*/}

              </Routes>



            </main>)
  }
export default Main       

