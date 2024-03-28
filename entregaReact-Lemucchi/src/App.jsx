import Header from "./componentes/Header.jsx"
import Main from "./componentes/Main.jsx"
import ItemListContainer from "./componentes/subcomponentes/ItemListContainer.jsx"
import NavBar from "./componentes/subcomponentes/NavBar.jsx"

function App() {
  return (
    <>
      <Header />
      <NavBar/>
      <ItemListContainer
        greeting="Bienvenido DinoLector" />
      <Main/>
    </>
  )
}

export default App
 