import { BrowserRouter } from "react-router-dom"
import Header from "./componentes/Header.jsx"
import { Routes, Route} from "react-router-dom"
import Home from "./componentes/pages/Home"
import Libros from "./componentes/pages/Libros"
import LibroDetalle from "./componentes/pages/LibroDetalle.jsx"
import Usuario from "./componentes/pages/Usuario.jsx"



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

                <Route path="/" element={<Home/>}/>

                <Route path="/Libros" element={<Libros/>}/>

                <Route path="/Libros/:id" element={<LibroDetalle/>}/>

                <Route path="category/:categoria" element={<Libros/>}/>

                <Route path="/Usuario" element={<Usuario/>}/>

                {/*<Route path="*" element={alert("ERROR")}/>*/}

              </Routes>
    </BrowserRouter>

  ) 
}

export default App
 