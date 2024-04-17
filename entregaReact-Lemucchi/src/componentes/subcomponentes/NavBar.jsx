import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

function NavBar(){
    return ( <div className="h-[100dvh]">
        <nav className="flex">
            <div className=" flex-col md:flex md:gap-4 ">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Categorias">Categorias</NavLink>
                <NavLink to="/Favoritos">Favoritos</NavLink>
                <NavLink to="/Carrito">
                    <CartWidget />
                </NavLink>
            </div>
        </nav>
        </div>
    )
}
export default NavBar