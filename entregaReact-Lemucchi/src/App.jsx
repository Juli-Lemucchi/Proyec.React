import { BrowserRouter } from "react-router-dom"
import Header from "./componentes/Header.jsx"
import { Routes, Route} from "react-router-dom"
import Home from "./componentes/pages/Home"
import Usuario from "./componentes/pages/Usuario.jsx"
import DetalleContainer from "./componentes/subcomponentes/DetalleContainer.jsx"
import CardLibrosContainer from "./componentes/subcomponentes/CardLibrosContainer.jsx"



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

                <Route path="/" element={<Home/>}/>

                <Route path="/Libros" element={<CardLibrosContainer/>}/>

                <Route path="/Libros/:id" element={<DetalleContainer/>}/>

                <Route path="/category/:categoria" element={<CardLibrosContainer/>}/>

                <Route path="/Usuario" element={<Usuario/>}/>

              </Routes>
    </BrowserRouter>

  ) 
}

export default App
 