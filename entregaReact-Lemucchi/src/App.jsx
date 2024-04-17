import { BrowserRouter } from "react-router-dom"
import Header from "./componentes/Header.jsx"
import Main from "./componentes/Main.jsx"



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main/>
    </BrowserRouter>

  ) 
}

export default App
 