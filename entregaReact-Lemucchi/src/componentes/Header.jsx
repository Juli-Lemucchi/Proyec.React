import NavBar from "./subcomponentes/NavBar"
import ItemListContainer from "./subcomponentes/ItemListContainer.jsx"
function Header(){
    return <header className="p-4 shadow-md bg-red-300 h-[100dvh]">
              <div className="">
                <h1 id="titulo" className="encabezado text-center font-bold text-3xl">DINO'BOOKS</h1>
              </div>
              <NavBar/>
              
</header>
}
export default Header
