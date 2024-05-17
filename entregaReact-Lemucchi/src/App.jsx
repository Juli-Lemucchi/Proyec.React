import { BrowserRouter } from "react-router-dom"
import Header from "./componentes/Header.jsx"
import { Routes, Route} from "react-router-dom"
import Home from "./componentes/pages/Home"
import DetalleContainer from "./componentes/containers/DetalleContainer.jsx"
import CardLibrosContainer from "./componentes/containers/CardLibrosContainer.jsx"
import Carrito from "./componentes/pages/Carrito.jsx"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import CustomContext from "./contexto.jsx"




function App() {
  return (
    <BrowserRouter>
      <CustomContext >
          <Header />
          <Routes>

                    <Route path="/" element={<Home/>}/>

                    <Route path="/Libros" element={<CardLibrosContainer/>}/>

                    <Route path="/Libros/:id" element={<DetalleContainer/>}/>

                    <Route path="/category/:categoria" element={<CardLibrosContainer/>}/>

                    <Route path="/carrito" element={<Carrito/>}/>

          </Routes>    
          <ToastContainer/>
      </CustomContext>
    </BrowserRouter>

  ) 
}

export default App
 