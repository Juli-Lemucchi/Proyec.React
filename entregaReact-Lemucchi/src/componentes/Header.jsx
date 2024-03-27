import NavBar from "./subcomponentes/NavBar"
import ItemListContainer from "./subcomponentes/ItemListContainer"
function Header(){
    return <header className="">
              <div className="p-4 shadow-md bg-red-300">
                <h1 id="titulo" className="encabezado text-center font-bold text-xl">DINO'BOOKS</h1>
                <NavBar/>
                <ItemListContainer 
                  greeting="Bienvenido DinoLector"/>
              </div>
</header>
}
export default Header
